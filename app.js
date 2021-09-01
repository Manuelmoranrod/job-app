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




app.listen(3000, (req, res) => {
    console.log('Conectado al puerto 3000!!');
})