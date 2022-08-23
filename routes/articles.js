var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var assert = require('assert');

const url = "mongodb://localhost:27017/myExpressDB"
/* GET Articles Page */
router.get('/', (req, res, next) =>  {
    var arr = []
    mongo.connect(url, (err, client) => {
        assert.equal(null, err);
        var db = client.db();
        var articlesData = db.collection('articles').find();
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

/* GET Articles Data*/
router.get('/get', (req, res, next) =>  {
    var arr = []
    mongo.connect(url, (err, client) => {
        assert.equal(null, err);
        var db = client.db();
        var articlesData = db.collection('articles').find();
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
router.post('/add', (req, res, next) => {
    var article = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    mongo.connect(url, (err, client) => {
        var db = client.db();
        assert.equal(null, err);
        db.collection('articles').insertOne(article, (err, result) => {
            assert.equal(null, err);
            console.log("Article Added");
            client.close();
        });
    })
    res.redirect('/articles')
})

// update Article
router.post('/update', (req, res, next) =>  {
    var article = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    var id = req.body.id

    mongo.connect(url, (err, client) => {
        assert.equal(null, err);
        var db = client.db();
        db.collection('articles').updateOne({ "_id": objectId(id) }, {$set: article} , (err, result) => {
            assert.equal(null, err);
            console.log("Article Updated");
            client.close();
        })
    })
    res.redirect('/articles')
})

// Delete An article
router.post('/delete', (req, res, next) =>  {
    var id = req.body.id

    mongo.connect(url, (err, client) => {
        assert.equal(null, err);
        var db = client.db();
        db.collection('articles').deleteOne({ "_id": objectId(id) }, (err, result) => {
            assert.equal(null, err);
            console.log("Article Deleted");
            client.close();
        })
    })
    res.redirect('/articles')
})

module.exports = router;
