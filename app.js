const express = require('express');
const cors = require('cors')
require('dotenv').config();
require('./utils/db')
//const process = require('process')
const path = require('path');
const port = process.env.PORT
const routes = require('./routes/front-routes');
const app = express();
const passport = require('passport');
const cookieSession=require('cookie-session');
require('./passport');
const bodyParser = require('body-parser')



app.use(cors());
app.use(express.urlencoded({extendet:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// app.use(cookieSession({
//     name: 'olga-session',
//     keys: ['key1', 'key2']
//   }))


app.set('view engine', 'pug');
app.set('views','./views');

app.use('/', routes)

app.get('*', (req, res)=>{
    res.status(404).send("Sorry... 404 Not Found");

});

  app.listen(port, () => {
    console.log(`Conectados al puerto ${port}!!`)
   
   });

