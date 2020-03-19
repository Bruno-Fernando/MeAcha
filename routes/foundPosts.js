const express = require("express");
const router = express.Router();
const FoundPost = require("../models/FoundPost");
const User = require("../models/User");
const { foundPostValidation } = require("../middlewares/postValidation");
const authValidation = require("../middlewares/authValidation");

router
  .route("/")
  .get((req, res) => {
    FoundPost.find()
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
  })
  .post(authValidation, foundPostValidation, (req, res) => {
    User.findById(req.user, (err, user) => {
      const newPost = new FoundPost({
        ...req.body,
        authorEmail: user.email,
        authorName: user.name,
        authorID: user._id
      });

      FoundPost.create(newPost, (err, post) => {
        if (err) {
          return res.status(500).json({
            success: false,
            error: "Server error"
          });
        } else {
          user.userPostIds.push(post._id);

          return res.status(201).json({
            success: true
          });
        }
      });
    });
  });

router
  .route("/:id")
  .get((req, res) => {
    FoundPost.findById(req.params.id, (err, post) => {
      if (err) {
        return res.status(404).json({
          success: false,
          error: "Post not found"
        });
      } else {
        return res.status(200).json({
          success: true,
          data: post
        });
      }
    });
  })
  .put((req, res) => res.send(`found pus with id: ${req.params.id}`))
  .delete((req, res) => res.send(`found delete with id: ${req.params.id}`));

module.exports = router;
