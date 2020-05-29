const express = require("express")
const router = express.Router();

const post = require("./post");
const lostPost = require("./lostPosts");
const foundPost = require("./foundPosts");
const user = require("./user");
const auth = require("./auth");

router.use("/", post);
router.use("/lost", lostPost);
router.use("/found", foundPost);
router.use("/user", user);
router.use("/auth", auth);

module.exports = router;
