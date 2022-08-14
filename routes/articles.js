var express = require('express');
var router = express.Router();

/* GET Articles */
router.get('/', function(req, res, next) {
  res.render('articles');
});

// Added New Article
router.post('/add', function(req, res, next) {
})

// update Article
router.post('/update', function(req, res, next) {
})

// Delete An article
router.post('/delete', function(req, res, next) {
})

module.exports = router;
