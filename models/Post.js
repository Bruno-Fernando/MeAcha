const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true
    },
    authorEmail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { discriminatorKey: "postType" }
);

// TODO adicionar imagens ao post

module.exports = mongoose.model("Post", PostSchema);
