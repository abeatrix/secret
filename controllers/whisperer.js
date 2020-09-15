const express = require('express');
const router = express.Router();
const db = require('../models');

// NEW ROUTE
router.get('/signup', (req, res) => {
    res.render('whisperer/new');
})

// CREATE ROUTE
router.post('/', (req, res) => {

    db.Whisperer.create(req.body, (err, newUser) => {
        if(err){
            console.log(err);
        }else {
            res.redirect('/secret');
        }
    });
});

// INDEX ROUTE
router.get('/', (req, res) => {

    db.Whisperer.find({}, (err, foundWhisperer) => {
        if(err){
            console.log(err);
        }else {
            res.render('whisperer/index', {
                whisperer: foundWhisperer
            })
        }
    })

});


module.exports = router;
