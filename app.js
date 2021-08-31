const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.send('Home')
});

app.get('/signup', (req, res) => {
    res.send('Registrarse')
});

app.get('/login', (req, res) => {
    res.send('Logarse')
});


app.listen(3000, () => {
    console.log('Conectado al puerto 3000!');
})