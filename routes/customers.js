var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myExpressDB');

/* ##################
// Express with MONGODB using Mongoose
################## */

var Schema = mongoose.Schema;

var customerDataSchema = new Schema({
    full_name: { type: String, required: true },
    city: String,
    job: String
}, { collection: 'customers'})

// Model
var customersData = mongoose.model('customers', customerDataSchema);

/* GET customers Page */
router.get('/', (req, res, next) =>  {
    customersData.find()
    .then((docs)=> {
        res.render('customers', { customers: docs })
    })
});

/* GET customers Data*/
router.get('/get', (req, res, next) =>  {
    // customersData.find()
    // .then((docs)=> {
    //     console.log("dd", docs);
    //     res.render('customers', { customers: docs })
    // })
    customersData.find({}, (err, doc) => {
        if (err) {
            console.error("there is some error no entry found");
        }
        res.render('customers', { customers: doc })
    })
});

// Added New customer
router.post('/add', (req, res, next) => {
    var customer = {
        full_name: req.body.full_name,
        city: req.body.city,
        job: req.body.job
    };
    var data = new customersData(customer);
    data.save();

    res.redirect('/customers');
})

// update customer
router.post('/update', (req, res, next) =>  {
    var id = req.body.id

    customersData.findById(id, (err, doc) => {
        if (err) {
            console.error("there is some error no entry found");
        }
        doc.full_name =req.body.full_name
        doc.city =req.body.city
        doc.job =req.body.job
        doc.save();

        res.redirect('/customers')
    })
})

// Delete An customer
router.post('/delete', (req, res, next) =>  {
    var id = req.body.id
    customersData.findByIdAndRemove(id).exec();

    res.redirect('/customers')
    
})

module.exports = router;
