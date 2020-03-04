const mongoose = require('mongoose');

const FindPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Add a title']
    },
    description: String,
    findPlace: {
        type: String,
        required: [true, 'Add the place you find the item']
    },
    meetingPlace: String
});

// TODO adicionar imagens ao post

module.exports = mongoose.model('FindPostSchema', FindPostSchema);
