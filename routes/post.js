const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const FoundPost = require("../models/FoundPost");
const LostPost = require("../models/LostPost");
const User = require("../models/User");

const postValidation = require("../middlewares/postValidation");
const postUpdateValidation = require("../middlewares/postUpdateValidation");
const authValidation = require("../middlewares/authValidation");

router.route("/new").post(authValidation, postValidation, (req, res) => {
  const { category, ...reqPost } = req.body;

  const PostModel = category == "lost" ? LostPost : FoundPost;

  User.findById(req.user, (err, user) => {
    const newPost = new PostModel({
      ...reqPost,
      authorEmail: user.email,
      authorName: user.name,
      authorID: user._id,
    });

    PostModel.create(newPost, (err, post) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: `Server error: ${err}`,
        });
      } else {
        user.userPostIds.push(post._id);

        user.save((err) => {
          if (err) {
            return res.status(500).json({
              success: false,
              error: `Server error: ${err}`,
            });
          }

          return res.status(201).json({
            success: true,
          });
        });
      }
    });
  });
});

router
  .route("/:id")
  .get((req, res) => {
    Post.findById(req.params.id, (err, post) => {
      if (err) {
        return res.status(404).json({
          success: false,
          error: "Post not found",
        });
      } else {
        return res.status(200).json({
          success: true,
          data: post,
        });
      }
    });
  })
  .put(authValidation, postUpdateValidation, async (req, res) => {
    User.findById(req.user, (err, user) => {
      if (!user.userPostIds.includes(req.params.id)) {
        return res.status(403).json({
          success: false,
          error: "Not allowed",
        });
      }

      const { category, ...toBeUpdated } = req.body;

      Post.findOneAndUpdate(
        { _id: req.params.id },
        toBeUpdated,
        (err, post) => {
          if (err) {
            return res.status(500).json({
              success: false,
              error: "Server error",
            });
          }
          return res.status(200).json({
            success: true,
          });
        }
      );
    });
  })
  .delete(authValidation, (req, res) => {
    Post.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: "Server error",
        });
      }

      User.findOneAndUpdate(
        req.user,
        { $pullAll: { userPostIds: [req.params.id] } },
        (err) => {
          if (err) {
            return res.status(500).json({
              success: false,
              error: "Server error",
            });
          }
          return res.status(200).json({
            success: true,
          });
        }
      );
    });
  });

module.exports = router;
