const express = require('express');
require('dotenv').config();
require('./utils/db')
const process = require('process')
const path = require('path');
const port = process.env.PORT
const routes = require('./routes/front-routes');
const app = express();
const apiRoutes = require('./routes/api-routes');




app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'pug');
app.set('views','./views');

app.use('/', routes)
app.use('/api',apiRoutes)

app.get('*', (req, res)=>{
    res.status(404).send("Sorry... 404 Not Found");
});

app.listen(port, () => {
 console.log(`Conectados al puerto ${port}!!`)

});