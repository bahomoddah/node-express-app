var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Bahomoddah', names: ['Ali', 'Ahmed'] });
});

module.exports = router;
