const dotenv = require("dotenv");
const mongoose = require('mongoose');
dotenv.config();

function connectDB() {
    try{
        mongoose.connect(process.env.MONGO_URI, );
        mongoose.connection.on('connected', () => {
            console.log("Connected to MongoDB");
        })
    } catch (error){
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

