const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    userPostIds: [String]
});

// TODO adicionar imagem de perfil do usuario

module.exports = mongoose.model('User', UserSchema);