const scraperEducaweb = require('../utils/educaweb');
//const scraperEmagister = require('../utils/scraping');
const apiRouter = {
    searchCourse: async (req, res) =>  {
        try {
              //Fetch api MongoDB
              //Petición de scrapingEducaweb (url + input.search.value)
        const param = req.param
        const educaweb = await scraperEducaweb(`https://www.educaweb.com/nf/cursos-de/${param}/`)
        //Petición de scrapingEmagister
        res.status(200).json(educaweb)
    } catch(err) {
        res.status(400).json({
            error: error.message
        })
    }
}}
module.exports = apiRouter