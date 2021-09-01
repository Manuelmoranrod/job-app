
require("dotenv").config();
const process = require('process')
const express = require('express');
const path = require('path');

const coursesRoutes = require('./router/courses');

const app = express();

app.use('/', coursesRoutes);

//Uso de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');

//
app.set('views', path.join(__dirname, 'views'));


app.listen(port, () => {
    console.log(`Nasa Landings app listening at http://localhost:${port}/`)
})


//require('./utils/db'); posible conexion con BBDD
const process = require('process')

//const apiRoutes = require('./routes/landings')
//const routes = require('./routes/front-routes')


const port = process.env.PORT

//Motor de vista

//app.set('view engine', 'pug');
//app.set('views','./views');

//Middlewares

//app.use(express.json());
//app.use(express.urlencoded({ extended:false}))// para que?

//Endpoints permitidos
//app.use('/api',apiRoutes)
//app.use('/', routes)

app.get('*', (req, res)=>{
    res.status(404).send("Sorry... 404 Not Found");
})
