const express = require("express");
const router = express.Router();
const LostPost = require("../models/LostPost");

router
  .route("/")
  .get((req, res) => {
    // TODO limitar a quantidade de posts em um range especificado
    LostPost.find({}, (err, posts) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: "Server error"
        });
      } else {
        posts.sort((postA, postB) => postB.createdAt - postA.createdAt);

        return res.status(200).json({
          success: true,
          data: posts
        });
      }
    });
  })
  .post((req, res) => {
    LostPost.create(req.body, (err, post) => {
      if (err) {
        if (err.name === "ValidationError") {
          const messages = Object.values(err.errors).map(val => val.message);

          return res.status(400).json({
            success: false,
            error: messages
          });
        } else {
          return res.status(500).json({
            success: false,
            error: "Server error"
          });
        }
      } else {
        return res.status(201).json({
          success: true
        });
      }
    });
  });

router
  .route("/:id")
  .get((req, res) => {
    LostPost.findById(req.params.id, (err, post) => {
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
  .put((req, res) => res.send(`lost pus with id: ${req.params.id}`))
  .delete((req, res) => res.send(`lost delete with id: ${req.params.id}`));

module.exports = router;
