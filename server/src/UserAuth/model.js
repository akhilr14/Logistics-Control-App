const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: { type: String, maxlength: 250 },
    lastName: { type: String, maxlength: 1000 },
    email: { type: String },
    password: { type: String},
    isAdmin: { type: Boolean },
});

const UserModel = mongoose.model("user", UserSchema,"user");

module.exports = UserModel;