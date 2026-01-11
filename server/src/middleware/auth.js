const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function (req, res, next) {
    const authHeader = req.header('Authorization');
    if(!authHeader) {
        return res.status(401).json({error: 'No token found, authorization failed'});
    }

    const token = authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({error: "No token found, authorization failed"});
    }

    try{
        const decoded = jwt.verify(token, process.env.jwtSecret);
        req.user = decoded.user;
        //console.log(req.user);
        next();
    } catch(error){
        return res.status(401).json({error: "Token is invalid"});
    }
}