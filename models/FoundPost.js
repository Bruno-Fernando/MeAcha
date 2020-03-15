const mongoose = require("mongoose");
const Post = require("./Post");

const FoundPost = Post.discriminator(
  "FoundPost",
  new mongoose.Schema({
    foundPlace: {
      type: String,
      required: true
    },
    meetingPlace: String
  })
);

module.exports = mongoose.model("FoundPost");