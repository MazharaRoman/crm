var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var PurchaseSchema = new mongoose.Schema({
    _client: {
        type: ObjectId,
        ref: "Client"
    },
    products: [{
        _id: { reture: false },
        _product: {
            type: ObjectId,
            require: true,
            ref: "Product"
        },
        description: String,
        amount: Number,
        price_uah: Number
    }],
    total: Number,
    type: Number
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });


module.exports = mongoose.model("Purchase", PurchaseSchema);