const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Add your name']
    },
    email: {
        type: String,
        required: [true, 'Add your email']
    },
    senha: {
        type: String,
        required: [true, 'Add your password']
    },
});

// TODO adicionar imagem de perfil do usuario

module.exports = mongoose.model('User', UserSchema);