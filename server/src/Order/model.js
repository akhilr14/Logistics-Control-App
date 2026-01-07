const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    startLocation: { type: String, maxlength: 250 },
    dropLocation: { type: String, maxlength: 250 },
    startDate: { type: Date },
    endDate: { type: Date },
    serviceType: { type: Number },
    passengerCount: { type: Number },
    goodsLoad: { type: Number },
    travelDistance: { type: Number },
    duration: { type: Number },
});

const OrderModel = mongoose.model("order", OrderSchema,"order");

module.exports = OrderModel;