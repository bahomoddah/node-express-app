var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

const url = "mongodb://localhost:27017/myExpressDB"
/* GET Articles Page */
router.get('/', function(req, res, next) {
  res.render('articles');
});

/* GET Articles Data*/
router.get('/get', function(req, res, next) {
  var arr = []

    mongo.connect(url, (err, client) => {
        assert.equal(null, err);
        var db = client.db();
        var articlesData = db.collection('articles').find();
        console.log('articles', articlesData);
        articlesData.forEach((doc, err) => {
            assert.equal(null, err);
            arr.push(doc)
        },
        () => {
            client.close()
            res.render('articles', { articles: arr })
        })
    })
  });

// Added New Article
router.post('/add', function(req, res, next) {
    var article = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    mongo.connect(url, function(err, client) {
        var db = client.db();
        assert.equal(null, err);
        db.collection('articles').insertOne(article, function(err, result) {
            assert.equal(null, err);
            console.log("Article Added");
            client.close();
        });
    })

    res.redirect('/articles')
})

// update Article
router.post('/update', function(req, res, next) {
})

// Delete An article
router.post('/delete', function(req, res, next) {
})

module.exports = router;
