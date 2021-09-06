const router = require('express').Router()
const apiRouter = require('./controllers/api-petition')

//Endpoints USERS
router.post('/user', apiRouter.registerUser)
router.put('/user', apiRouter.editUser)
router.delete('/user', apiRouter.deleteUser) //For Admin view

//Endpoints Log IN/OUT
router.post('/login', apiRouter.loginApp)
router.post('/logout', apiRouter.exitApp)

//Endpoints Search
router.get('/search', apiRouter.searchCourse)

//Course Cards
router.post('ads', apiRouter.createCourse) //For Admin view
router.put('/ads', apiRouter.editCourse) //For Admin view
router.delete('/ads', apiRouter.deleteCourse)

//Favorites
router.post('/favorites', apiRouter.saveFavorite)
router.delete('/favorites', apiRouter.deleteCourse)