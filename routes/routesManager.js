const express = require("express");
const router = express.Router();

const homePosts = require("./homePosts");
const post = require("./post");
const user = require("./user");
const auth = require("./auth");

router.use("/", homePosts);
router.use("/post", post);
router.use("/user", user);
router.use("/auth", auth);

module.exports = router;
