var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'No product name',
        require : true,
    },
    category_id : {type : mongoose.Schema.ObjectId},
    image : {type : String},
    price : {type :String},
    warranty: {type : String},
    accessories : {type: String},
    new  : {type: String},
    promotion : {type: String},
    status : {type: Number},
    featured : {type: Number},
    details : {type: String}
});

module.exports = mongoose.model('products', productSchema, 'products');
