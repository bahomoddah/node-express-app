var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Bahomoddah', names: ['Ali', 'Ahmed'] });
});

// Get car details
router.get('/car/:id', function(req, res, next) {
  res.render('car', { output: req.params.id })
})

router.get('/cars', function(req, res, next) {
  res.render('cars')
})

// POST new car
router.post('/cars/add', function(req, res, next) {
  var id = req.body.id
  res.redirect('/car/' + id)
})

module.exports = router;
