var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/1', function(req, res, next) {
  res.send('This is user 1')
})

module.exports = router;
