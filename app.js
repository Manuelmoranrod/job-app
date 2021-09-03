
require("dotenv").config();
const process = require('process')
const express = require('express');
const path = require('path');
const port = process.env.PORT
const routes = require('./routes/front-routes');

const app = express();


//Rutas Web
app.use('/', routes);
//Para usar la carpeta public
app.use(express.static(path.join(__dirname, 'public')));


//Motor de vista con pug
app.set('view engine', 'pug');
app.set('views','./views');



app.listen(port, () => {
    console.log(`Nasa Landings app listening at http://localhost:${port}/`)
});


app.get('*', (req, res)=>{
    res.status(404).send("Sorry... 404 Not Found");
});