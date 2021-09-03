const router = require('express').Router()
const frontViews = require('../controllers/frontviews')
//Front routes
router.get('/', frontViews.home)
router.get('/singup', frontViews.signup) //inscription formulary
router.get('/login', frontViews.login) // login without auth 