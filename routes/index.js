var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Basic usage of Express Router
  res.render('index', { title: 'Express with MongoDB', author: 'Bahomoddah'});
});

module.exports = router;
