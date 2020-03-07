const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
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
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { discriminatorKey: "posttype" }
);

// TODO adicionar imagens ao post

module.exports = mongoose.model("Post", PostSchema);
