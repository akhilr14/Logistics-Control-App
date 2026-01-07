const { check } = require("express-validator");

exports.validate = [
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
    check("mobileNumber")
        .trim()
        .not()
        .isEmpty()
        .withMessage("MobileNumber Required"),
    check("license")
        .trim()
        .not()
        .isEmpty()
        .withMessage("License Required"),
    check("ratePerDay")
        .trim()
        .not()
        .isEmpty()
        .withMessage("ratePerDay Required"),
    check("overtimeRate")
        .trim()
        .not()
        .isEmpty()
        .withMessage("overtimeRate Required"),
    check("status")
        .trim()
        .not()
        .isEmpty()
        .withMessage("status Required"),
]