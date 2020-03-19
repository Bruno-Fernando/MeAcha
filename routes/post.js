const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .limit(15)
    .then(posts => {
      return res.status(200).json({
        success: true,
        data: posts
      });
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        error: "Server error"
      });
    });
});

module.exports = router;
