const express = require('express');
const router = express.Router();





router.get('/favorites', (req, res) => {
    res.render('favoritos')
});





module.exports = router