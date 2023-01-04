const express = require('express');
const router = express.Router();

const Post = require('../models/Post.model')
/* GET Posts page */
router.get("/posts", (req, res) => {
    Post.find()
    .then(posts => res.render("posts/list", { posts }))
  ;
});

module.exports = router;