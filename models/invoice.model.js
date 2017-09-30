let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;

let InvoiceSchema = new mongoose.Schema({
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

InvoiceSchema.statics.findMode = function (mode, id) {
    let query = id ? this.findById(id) : this.find();
    if (mode.aggregate === "true") {
        return query.populate('_client').populate({path: 'products._product', model: 'Product'})
    }
    return query;
};

module.exports = mongoose.model("Invoice", InvoiceSchema);