const mongoose = require('mongoose');

const LostPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Add a title']
    },
    description: String,
    lostPlace: [String],
    bounty: Number
});

// TODO adicionar imagens ao post

module.exports = mongoose.model('LostPostSchema', LostPostSchema);
