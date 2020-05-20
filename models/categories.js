var mongoose = require('mongoose');

var categoriesSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'No Name',
        require : true,
    },
    quantity: {
        type: Number,
        default : 0,
    }
});

module.exports = mongoose.model('categories', categoriesSchema, 'categories');