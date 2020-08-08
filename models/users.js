var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    full_name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        // unique : true,
        dropDups: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    level: {
        type: Number,
    },
});

module.exports = mongoose.model('users', usersSchema, 'users');
