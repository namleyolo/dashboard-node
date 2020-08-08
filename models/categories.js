var mongoose = require('mongoose');

var categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'No Name',
        require : true,
    },
    _id: {
        type: mongoose.Schema.ObjectId,
    },
}, {
    timestamps: true,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}

});

categoriesSchema.virtual("productsByCategory", {
    ref: 'products', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'cat_id',
    // is equal to `foreignField`)
});

module.exports = mongoose.model('categories', categoriesSchema, 'categories');
