const mongoose = require("mongoose");
const Post = require("./Post");

const LostPost = Post.discriminator(
  "LostPost",
  new mongoose.Schema({
    lostPlace: [String],
    bounty: Number
  })
);

module.exports = mongoose.model("LostPost");