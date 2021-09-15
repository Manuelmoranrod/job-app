const express = require('express');
const cors = require('cors')
require('dotenv').config();
require('./utils/db')

const passport = require('passport')
const process = require('process')
const path = require('path');//Para la carpute public
const port = process.env.PORT
const routes = require('./routes/front-routes');
const apiRoutes = require('./routes/api-routes');
const app = express();
const cookieSession=require('cookie-session');
require('./passport');


//Acceso a carpeta public
app.use(express.static(path.join(__dirname, 'public')));

//Passport
app.use(passport.initialize())
app.use(passport.session())

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Motor de vista

app.set('view engine', 'pug');
app.set('views','./views');

//Routes

app.use('/', routes)
app.use('/api', apiRoutes)

app.get('*', (req, res)=>{
    res.status(404).send("Sorry... 404 Not Found");

});

app.listen(port, () => {
    console.log(`Conectados al puerto ${port}!!`)
   
   });

