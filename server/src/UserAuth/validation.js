const { check } = require("express-validator");

module.exports = [
    check("firstName")
        .trim()
        .not()
        .isEmpty()
        .withMessage("FirstName Required")
        .isLength({ max:250 })
        .withMessage("FirstName length exceeded"),
    check("lastName")
        .trim()
        .isLength({ max:100 })
        .withMessage("LastName length exceeded"),
    check("email")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Email Required")
        .isEmail()
        .withMessage("Valid Email required"),
    check("password")
        .trim()
        .not()
        .isEmpty()
        .withMessage("password Required"),
    check("isAdmin")
        .trim()
        .not()
        .isEmpty()
        .withMessage("isAdmin Required")
]