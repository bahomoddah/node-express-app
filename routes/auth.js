var express = require('express');
var router = express.Router();

// get Signup page
router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Validation', success: false, errors: null});
});

// SignUp POST
router.post('/register', function(req, res, next) {
    console.log('You signed up');
    res.redirect('/')
})

module.exports = router;