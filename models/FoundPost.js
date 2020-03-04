const mongoose = require("mongoose");

const FoundPostSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: [true, "Add the author name"]
  },
  authorEmail: {
    type: String,
    required: [true, "Add the author email"]
  },
  title: {
    type: String,
    required: [true, "Add a title"]
  },
  description: String,
  foundPlace: {
    type: String,
    required: [true, "Add the place you find the item"]
  },
  meetingPlace: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// TODO adicionar imagens ao post

module.exports = mongoose.model("FoundPost", FoundPostSchema);
