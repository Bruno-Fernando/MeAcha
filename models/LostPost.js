const mongoose = require('mongoose');

const LostPostSchema = new mongoose.Schema({
    authorName: String,
    authorEmail: String,
    title: {
        type: String,
        required: [true, 'Add a title']
    },
    description: String,
    lostPlace: [String],
    bounty: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// TODO adicionar imagens ao post

module.exports = mongoose.model('LostPost', LostPostSchema);
