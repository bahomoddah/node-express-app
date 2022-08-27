var express = require('express');
var router = express.Router();
var db = require('monk')('localhost:27017/myExpressDB');
var postsData = db.get('posts');

/* ##################
// Express with MONGODB using Monk
################## */

/* GET posts Page */
router.get('/', (req, res, next) =>  {
    postsData.find({})
    .then((docs)=> {
        res.render('posts', { posts: docs })
    })
    // data.on('success', (docs)=> {
        // console.log('vvv', data);
        // res.render('posts', { posts: data })
    // })
});

/* GET posts Data*/
router.get('/get', (req, res, next) =>  {
    postsData.find({})
    .then((docs)=> {
        res.render('posts', { posts: docs })
    })
});

// Added New post
router.post('/add', (req, res, next) => {
    var post = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    postsData.insert(post)
    res.redirect('/posts')
})

// update post
router.post('/update', (req, res, next) =>  {
    var post = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    var id = req.body.id
    // postsData.update({ "_id": db.id(id) }, post);
    postsData.updateById(id, post);
    res.redirect('/posts')
})

// Delete An post
router.post('/delete', (req, res, next) =>  {
    var id = req.body.id

    postsData.remove({ "_id": db.id(id)});
    // postsData.removeById(id);
    res.redirect('/posts')
})

module.exports = router;
