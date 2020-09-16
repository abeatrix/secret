const express = require('express');
const router = express.Router();
const db = require('../models');

// NEW ROUTE
router.get('/post', (req, res) => {
    res.render('secret/post');
})

// CREATE ROUTE
router.post('/', (req, res) => {

    db.Secret.create(req.body, (err, newPost) => {
        if(err){
            console.log(err);
        }else {
            console.log(newPost)
            res.redirect('/secret');
        }
    });
});

//SHOW ROUTE
router.get('/:i', (req, res) => {

    db.Secret.findById(req.params.i, (err, dbSecret) => {
        if(err){
            console.log(err);
        }else{
            res.render('secret/secret', {
                oneSecret: dbSecret,
            })
        }
    })
})


// INDEX ROUTE
router.get('/', (req, res) => {

    db.Secret.find({}, (err, allSecret) => {
        if(err){
            console.log(err);
        }else {
            res.render('secret/index', {
                secrets: allSecret
            })
        }
    })

});


// DELETE ROUTE
router.delete('/:i', (req, res) => {

    db.Secret.findByIdAndDelete(req.params.i, (err, deletedSecret) => {
        if(err){
            console.log(err)
        } else{
            console.log(deletedSecret);
            res.redirect('/secret')
        }
    })
})

//EDIT ROUTE
router.get('/:i/edit', (req, res) => {

    db.Secret.findById(req.params.i, (err, dbSecret) => {
        if(err){
            console.log(err)
        } else{
            res.render('secret/edit', {
                oneSecret: dbSecret,
            })
        }
    })
})

// UPDATE ROUTE
router.put('/:i', (req, res) => {

    db.Secret.findByIdAndUpdate(req.params.i, req.body, {new: true}, (err, updatedSecret) => {
        if(err){
            console.log(err)
        }else{
            console.log(updatedSecret);
            res.redirect(`/secret/${req.params.i}`)
        }
    })
})

module.exports = router;
