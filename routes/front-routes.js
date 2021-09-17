const router = require('express').Router()
const frontViews = require('../controllers/frontviews')
const passport = require('passport')
const jwtAuth = require('../utils/jwtAuth')


//Front routes
router.get('/', frontViews.home)
router.get('/register', frontViews.register)//inscription formulary
router.get('/login', frontViews.login)// Login with jwtAuth 
router.get('/google',passport.authenticate('google', { scope: ['profile','email'] }),(req,res)=>{res.redirect('/dashboard')});
router.get('/google/callback', passport.authenticate('google', { successRedirect:"/", failureRedirect: '/login' }),frontViews.googleLogin );

router.get('/favorites', jwtAuth.authCookie, frontViews.favoritos)
router.get('/profile',jwtAuth.authCookie, frontViews.profile)


router.get('/users', jwtAuth.authCookie, frontViews.users) // Vista para admin
router.get('/dashboard', jwtAuth.authCookie, frontViews.dashboard) // Vista para admin


module.exports = router