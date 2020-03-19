const express = require("express");
const router = express.Router();
const FoundPost = require("../models/FoundPost");
const User = require("../models/User");
const { foundPostValidation } = require("../middlewares/postValidation");
const { foundPostUpdateValidation } = require("../middlewares/postUpdateValidation");
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
  .put(authValidation, foundPostUpdateValidation, (req, res) => {
    User.findById(req.user, (err, user) => {
      if (!user.userPostIds.includes(req.params.id)) {
        return res.status(404).json({
          success: false,
          error: "Not allowed"
        });
      }
    });

    FoundPost.findOneAndUpdate(req.params.id, { ...req.body }, (err, post) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: "Server error"
        });
      }
      return res.status(200).json({
        success: true
      });
    });
  })
  .delete(authValidation, (req, res) => {
    FoundPost.deleteOne(req.params.id, (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: "Server error"
        });
      }

      User.findOneAndUpdate(req.user, { $pullAll: { userPostIds: [req.params.id] } }, (err) => {
        if(err) {
          return res.status(500).json({
            success: false,
            error: "Server error"
          });
        }
      })

      return res.status(200).json({
        success: true
      });
    })
  });

module.exports = router;
