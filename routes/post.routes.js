const express = require('express');
const router = express.Router();

const Post = require('../models/Post.model')
/* GET Posts page */
router.get("/posts", (req, res) => {
    Post.find()
    .then(posts => res.render("posts/post-list", { posts }))
  ;
});



router.get("/posts/:id", (req,res) => {
  const {id} = req.params
  Post.findById(id)
  .then((post)=>{
    res.render("posts/post-details", post)
  })
})

router.get('/create', (req, res)=>{
    res.render('posts/new')

})

module.exports = router;