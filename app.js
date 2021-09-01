
require("dotenv").config();
const process = require('process')
const express = require('express');
const path = require('path');
const port = process.env.PORT
const coursesRoutes = require('./router/courses');

const app = express();

app.use('/', coursesRoutes);
app.use(express.static(path.join(__dirname, 'public')));


//EJS como motor de vista
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(port, () => {
    console.log(`Nasa Landings app listening at http://localhost:${port}/`)
});



app.get('*', (req, res)=>{
    res.status(404).send("Sorry... 404 Not Found");
});



