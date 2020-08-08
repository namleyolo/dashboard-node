var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'No product name',
        require : true,
    },
    cat_id: {type: mongoose.Schema.ObjectId, ref: 'categories'},
    image : {type : String},
    price : {type :String},
    warranty: {type : String},
    accessories : {type: String},
    new  : {type: String},
    promotion : {type: String},
    status : {type: Number},
    featured : {type: Number},
    details : {type: String}
}, {
    timestamps: true,
    toJSON: {virtuals: true}
})

productSchema.virtual("cat", {
    ref: 'categories', // The model to use
    localField: 'cat_id', // Find people where `localField`
    foreignField: '_id', // is equal to `foreignField`)
});

// ObjectId("5eccd3faf3d811bfe648866c")
module.exports = mongoose.model('products', productSchema, 'products');
