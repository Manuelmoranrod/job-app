const router = require('express').Router()
const frontViews = require('../controllers/frontviews')


//Front routes
router.get('/', frontViews.home)
router.get('/signup', frontViews.signup)//inscription formulary
router.get('/login', frontViews.login)// login with auth 

router.get('/favorites', frontViews.favoritos)
router.get('/profile', frontViews.profile)
router.get('/users', frontViews.users) 



module.exports = router