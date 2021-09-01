const { Router } = require('express');

const router = require('express').Router()
const frontViews = require('../controllers/frontViews')
//Front routes
router.get('/', frontViews.home)
router.get('/singup', frontViews.singup)//inscription formulary
router.get('/login', frontViews.login)// login with auth