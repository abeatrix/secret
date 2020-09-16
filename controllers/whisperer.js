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
            console.log(newUser)
            res.redirect('/whisperer');
        }
    });
});

//SHOW ROUTE
router.get('/:i', (req, res) => {

    db.Whisperer.findById(req.params.i, (err, oneWhispererDB) => {
        if(err){
            console.log(err);
        }else{
            res.render('whisperer/user', {
                oneWhisperer: oneWhispererDB,
            })
        }
    })
})


// INDEX ROUTE
router.get('/', (req, res) => {

    db.Whisperer.find({}, (err, allWhisperer) => {
        if(err){
            console.log(err);
        }else {
            res.render('whisperer/index', {
                whisperers: allWhisperer
            })
        }
    })

});


module.exports = router;
