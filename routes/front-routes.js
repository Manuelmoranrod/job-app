const router = require('express').Router()
const frontViews = require('../controllers/frontviews')
const passport = require('passport')


//Front routes
router.get('/', frontViews.home)
router.get('/register', frontViews.signup)//inscription formulary
router.get('/login', frontViews.login)// login with auth 

router.get('/favorites', frontViews.favoritos)
router.get('/profile', frontViews.profile)

router.get('/users', frontViews.users) // Vista para admin
router.get('/dashboard', frontViews.dashboard) // Vista para admin





module.exports = router