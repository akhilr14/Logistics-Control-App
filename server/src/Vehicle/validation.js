const { check, body } = require("express-validator");

module.exports = [
    check("name")
        .trim()
        .not()
        .isEmpty()
        .withMessage("name Required")
        .isLength({ max:250 })
        .withMessage("name length exceeded"),
    check("model")
        .trim()
        .isLength({ max:1000 })
        .withMessage("model length exceeded"),
    check("registrationNumber")
        .trim()
        .not()
        .isEmpty()
        .withMessage("registrationNumber Required")
        .isLength({ max:250 })
        .withMessage("registrationNumber length exceeded"),
    check("type")
        .trim()
        .not()
        .isEmpty()
        .withMessage("type Required"),
    check("purpose")
        .trim()
        .not()
        .isEmpty()
        .withMessage("purpose Required"),
    check("ratePerKM")
        .trim()
        .not()
        .isEmpty()
        .withMessage("ratePerKM Required"),
    check("status")
        .trim()
        .not()
        .isEmpty()
        .withMessage("status Required"),
    body().custom((value, { req }) => {
        if (!req.body.passengerCapacity && !req.body.goodsCapacity) {
        throw new Error("Either passengerCapacity or goodsCapacity is mandatory");
        }
        return true;
    }),
]