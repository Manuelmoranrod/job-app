const router = require('express').Router()
const frontViews = require('../controllers/frontviews')


//Front routes
router.get('/', frontViews.home)
// router.get('/singup', frontViews.singup)//inscription formulary
// router.get('/login', frontViews.login)// login with auth 

// router.get('/favorites', frontViews.favoritos)
// router.get('/profile', frontViews.profile)



















module.exports = router