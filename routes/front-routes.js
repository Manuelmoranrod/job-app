const express = require('express');
const router = express.Router();


router.get('/favorites', (req, res) => {
    res.render('favoritos')
});





module.exports = router



// const router = require('express').Router()
// const frontViews = require('../controllers/frontViews')
// //Front routes
// router.get('/', frontViews.home)
// router.get('/singup', frontViews.singup)//inscription formulary
// router.get('/login', frontViews.login)// login with auth