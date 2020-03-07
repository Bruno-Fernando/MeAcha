const mongoose = require("mongoose");
const Post = require("./Post");

const FoundPost = Post.discriminator(
  "FoundPost",
  new mongoose.Schema({
    foundPlace: {
      type: String,
      required: [true, "Add the place you find the item"]
    },
    meetingPlace: String
  })
);

module.exports = mongoose.model("FoundPost");