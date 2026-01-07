const { check } = require("express-validator");

module.exports = [
    check("orderID")
        .trim()
        .not()
        .isEmpty()
        .withMessage("orderID cannot be empty"),
    check("driverID")
        .trim()
        .not()
        .isEmpty()
        .withMessage("driverID cannot be empty"),
    check("vehicleID")
        .trim()
        .not()
        .isEmpty()
        .withMessage("vehicleID cannot be empty"),
    check("estimatedCost")
        .trim()
        .not()
        .isEmpty()
        .withMessage("estimatedCost cannot be empty"),
    check("status")
        .trim()
        .not()
        .isEmpty()
        .withMessage("status cannot be empty"),
]