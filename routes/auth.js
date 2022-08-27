var express = require('express');
var router = express.Router();

/* ##################
// Express with express-validator and express-session
################## */

// get Signup page
router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Validation', success: req.session.success , errors: req.session.errors});
    req.session.errors = null
    req.session.success = false
});

// SignUp POST
router.post('/register', function(req, res, next) {
    console.log('You signed up');
    req.check('email', 'Invalid email address').isEmail()
    req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);

    var errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors
        req.session.success = false
        res.redirect('/auth/signup')
    } else {
        req.session.success = true
        res.redirect('/auth/signup')
        // res.redirect('/')
    }
})

module.exports = router;