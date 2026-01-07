const { check, body } = require("express-validator");

module.exports = [
    check("startLocation")
        .trim()
        .not()
        .isEmpty()
        .withMessage("startLocation Required")
        .isLength({ max:250 })
        .withMessage("startLocation length exceeded"),
    check("lastName")
        .trim()
        .not()
        .isEmpty()
        .withMessage("dropLocation Required")
        .isLength({ max:250 })
        .withMessage("dropLocation length exceeded"),
    check("startDate")
        .trim()
        .not()
        .isEmpty()
        .withMessage("startDate Required")
        .isISO8601()
        .withMessage("Must be a valid date"),
    check("endDate")
        .trim()
        .not()
        .isEmpty()
        .withMessage("endDate Required")
        .isISO8601()
        .withMessage("Must be a valid date"),
    check("serviceType")
        .trim()
        .not()
        .isEmpty()
        .withMessage("serviceType Required"),
    check("travelDistance")
        .trim()
        .not()
        .isEmpty()
        .withMessage("travelDistance Required"),
    check("duration")
        .trim()
        .not()
        .isEmpty()
        .withMessage("duration Required"),
    body().custom((value, { req }) => {
        if (!req.body.passengerCount && !req.body.goodsLoad) {
        throw new Error("Either passengerCount or goodsLoad is mandatory");
        }
        return true;
    }),
    
]