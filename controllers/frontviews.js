//const courseSchema = require('../models/courseSchema')

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
    users:(req,res) => {
        console.log("estoy en la función users" );
        res.status(200).render('users')
    },
    


}

module.exports = frontView