const { json } = require('express')
const { scraperEducaweb } = require('../utils/educaweb')//Cuidado con como lo importas,
const { scraperEmagister } = require('../utils/scraperemagister')//necesitamos funcion

const apiRouter = {
    searchCourse: async (req, res) => {
        try {
            const param = req.query.keyword
            //console.log('******',req);
            console.log(param);

            const educaweb = await scraperEducaweb(`https://www.educaweb.com/nf/cursos-de/${param}/`)
            const emagister = await scraperEmagister(`https://www.emagister.com/web/search/?searchAction=search&idsegment=1&q=${param}`)
            const data = educaweb.concat(emagister)

            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                error: error.message
            })
        }
    },

}


module.exports = apiRouter