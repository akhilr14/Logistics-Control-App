const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({
    name: { type: String, maxlength: 250 },
    model: { type: String, maxlength: 1000 },
    registrationNumber: { type: String, maxlength: 250 },
    type: { type: Number },
    purpose: { type: Number },
    passengerCapacity: { type: Number },
    goodsCapacity: { type: Number },
    ratePerKM: { type: Number },
    status: { type: Number }
});

const VehicleModel = mongoose.model("vehicle", VehicleSchema,"vehicle");

module.exports = VehicleModel;