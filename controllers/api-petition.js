
const { scraperEducaweb } = require('../utils/educaweb')//Cuidado con como lo importas,
const { scraperEmagister } = require('../utils/scraperemagister')//necesitamos funcion
const Users = require('../models/users')
const bcrypt = require('bcrypt')
//const passport = require('passport')
const initializePassport = require('../public/js/passport-config')

const apiRouter = {
    searchCourse: async (req, res) => {
        try {
            const param = req.query.keyword

            const educaweb = await scraperEducaweb(`https://www.educaweb.com/nf/cursos-de/${param}/`)
            const emagister = await scraperEmagister(`https://www.emagister.com/web/search/?searchAction=search&idsegment=1&q=${param}`)
            const data = emagister.concat(educaweb)

            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                error: error.message
            })
        }
    },
    registerUser: async (req,res) => {
        try{
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
            const hashedPassword = await bcrypt.hash(password, 10) //Encripta la password
            const num = await Users.insertUser(name, email, hashedPassword)
            res.status(200).redirect('/login');

        }catch(error){
            res.status(400).json({
                error: error.message
            })
        }
    },
    loginApp: async (req,res) => {
        try{
            //const email = req.body.email
            //const user = await Users.getUser(email)
            //const usuario = user[0]
            initializePassport()
            
            //console.log('ESTE', usuario)
            res.status(200).redirect('/login');

        }catch(error){
            res.status(400).json({
                error: error.message
            })
        }
    }

}

module.exports = apiRouter