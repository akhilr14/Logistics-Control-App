const mongoose = require('mongoose');

const DriverSchema = mongoose.Schema({
    firstName: { type: String, maxlength: 250 },
    lastName: { type: String, maxlength: 100 },
    mobileNumber: { type: Number },
    license: { type: Number },
    ratePerDay: { type: Number },
    overtimeRate: { type: Number },
    status: { type: Number },
});

const DriverModel = mongoose.model("driver", DriverSchema,"driver");

module.exports = DriverModel;