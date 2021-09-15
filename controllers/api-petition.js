
const { scraperEducaweb } = require('../utils/educaweb')//Cuidado con como lo importas,
const { scraperEmagister } = require('../utils/scraperemagister')//necesitamos funcion
const Users = require('../models/users')


const apiRouter = {
    searchCourse: async (req, res) => {
        try {
            const param = req.query.keyword
            //console.log('******',req);
            //console.log(param);

            const educaweb = await scraperEducaweb(`https://www.educaweb.com/nf/cursos-de/${param}/`)
            const emagister = await scraperEmagister(`https://www.emagister.com/web/search/?searchAction=search&idsegment=1&q=${param}`)
            const data = emagister.concat(educaweb)
            console.log('DATA', data);
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                error: error.message
            })
        }
    },
    registerUser: async (req,res)=> {
        try{
           const data = req.body
        //    console.log('REQBODY.EMAIL', req.body.name);
        //    console.log('REQBODY.NAME', req.body.email);
            // Insert SQL (api/user)
            //console.log('CLG API PETITIONS', data)
            const num = await Users.insertUser(data)
            
            res.status(200).redirect('/login')

        }catch(error){
            res.status(400).json({
                error: error.message
            })
        }
    },

    loginApp: async (req,res) => {
        try{
            const data = req.body.email
            console.log('Data de req.body.email:', data);
            const user = await Users.getUser(data)
            //pasar el token
            const usuario = user[0]
            console.log('ESTE', usuario)
            res.status(200).redirect('/login');
        }catch(error){
            res.status(400).json({
                error: error.message
            })
        }
    }, 

    // exitApp: async (req, res) => {
    //     try {
    //          //reemplazamo la ccokie jwt con con una cookie en blanco durante 1 milisegundo
    //         res.cookie('jwt', '', {maxAge: 1});
    //         res.redirect('/home') 
    //     }
    //     catch {
    //         res.status(400).json({
    //         error: error.message
    //         })
    //     }
    // }

}

module.exports = apiRouter