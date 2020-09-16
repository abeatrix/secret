const express = require('express');
const router = express.Router();
const db = require('../models');
const mongoose = require('mongoose');

mongoose.connect();

app.use(express.session({
    secret: 'a4f8071f-c873-4447-8ee2',
    cookie: { maxAge: 2628000000 },
    store: new (require('express-sessions'))({
        storage: 'mongodb',
        instance: mongoose, // optional
        host: 'localhost', // optional
        port: 27017, // optional
        db: 'test', // optional
        collection: 'sessions', // optional
        expire: 86400 // optional
    })
}));

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
                cakeDay: Date(oneWhispererDB.createdAt),
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
