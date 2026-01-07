const model = require("./model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../middleware/config');

async function signUp(body) {
      const {firstName, lastName, email, password, isAdmin} = body;
      
      try{
        let user = await model.findOne({email});
        if(user)
            return { status: false, count: 0, result: 'User already exists', error: null };

        user = new model({firstName, lastName, email, password, isAdmin});
        
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user: {
                id: user.id,
                isAdmin: user.isAdmin
            }
        };

        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 });
        return { status: true, count: 1, result: token, error: null };
            
      } catch (err) {
        console.error(err.message);
        return { status: false, count: 0, result: "Server Error", error: err };
      }
}

async function login(body) {
    const { email, password } = body;

    try {
        let user = await model.findOne({ email });
        if (!user) {
            return { status: false, count: 0, result: 'Invalid credentials', error: null };
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return { status: false, count: 0, result: 'Invalid credentials', error: null };
        }

        const payload = {
            user: {
                id: user.id,
                isAdmin: user.isAdmin
            }
        };

        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 });
        return { status: true, count: 1, result: token, error: null };
    } catch (err) {
        console.error(err.message);
        return { status: false, count: 0, result: "Server Error", error: err };
    }
}

module.exports = {signUp, login};