const router = require("express").Router();

// Dependencies
const path = require('path');

  router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });

  // exercise route loads exercise.html
  router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  // If no matching route is found default to home
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  module.exports = router;