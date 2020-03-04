const mongoose = require('mongoose');

const FindPostSchema = new mongoose.Schema({
    authorName: String,
    authorEmail: String,
    title: {
        type: String,
        required: [true, 'Add a title']
    },
    description: String,
    findPlace: {
        type: String,
        required: [true, 'Add the place you find the item']
    },
    meetingPlace: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// TODO adicionar imagens ao post

module.exports = mongoose.model('FindPost', FindPostSchema);
