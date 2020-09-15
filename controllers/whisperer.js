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

//SHOW ROUTE
router.get('/:i', (req, res) => {

    db.Redditor.findById(req.params.i, (err, oneWhisperer) => {
        if(err){
            console.log(err);
        }else{
            res.render('user.ejs' {
                whisperer: oneWhisperer,
            })
        }
    })
})


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
