const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name']
    },
    email: {
        type: String,
        required: [true, 'Please add your email']
    },
    senha: {
        type: String,
        required: [true, 'Please add your password']
    },
});

module.exports = mongoose.model('User', UserSchema);