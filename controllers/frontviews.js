const courseSchema = require('../models/courseSchema')

const frontView = {
    home: (req,res) => {
        res.status(200).render('home')
    },
    signup: (req,res) => {
        res.status(200).render('signup')
    },
    login:(req,res) => {
        res.status(200).render('login')
    },
    favoritos: (req, res) => {
    res.status(200).render('favoritos')
    },
    profile: (req, res) => {
    res.status(200).render('profile')
    },
}

module.exports = frontView
