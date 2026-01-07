const mongoose = require('mongoose');

const AllocatedOrderSchema = mongoose.Schema({
    orderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    },
    driverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver",
    },
    vehicleID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
    },
    estimatedCost: { type: Number },
    status: { type: Number },
});

const AllocatedOrderModel = mongoose.model("allocatedOrder", AllocatedOrderSchema,"allocatedOrder");

module.exports = AllocatedOrderModel;