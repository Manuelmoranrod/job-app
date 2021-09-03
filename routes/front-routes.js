const router = require('express').Router()
const frontViews = require('../controllers/frontviews')


//Front routes
router.get('/', frontViews.home)
router.get('/singup', frontViews.singup)//inscription formulary
router.get('/login', frontViews.login)// login with auth 

router.get('/favorites', (req, res) => {
    res.render('favoritos')
});













module.exports = router