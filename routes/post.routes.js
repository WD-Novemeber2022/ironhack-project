const express = require('express');
const router = express.Router();

/* GET Posts page */
router.get("/posts", (req, res) => {
  res.render("posts/list");
});

module.exports = router;