var express = require('express');
var router = express.Router();

// get Signup page
router.get('/signup', function(req, res, next) {
    res.render('signup');
});

module.exports = router;