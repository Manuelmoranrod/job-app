const express = require("express");
require("dotenv").config();
require("./utils/db");
// require("./facebook")();

const process = require("process");
const path = require("path");
const port = process.env.PORT;
const routes = require("./routes/front-routes");
const apiRoutes = require("./routes/api-routes");

const app = express();
const passport = require("passport");
// const cookieSession=require('cookie-session');
require("./passport");
// const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// app.use(cookieSession({
//     name: 'olga-session',
//     keys: ['key1', 'key2']
//   }))

app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  res.status(404).send("Sorry... 404 Not Found");
});

app.listen(port, () => {
  console.log(`Conectados al puerto ${port}!!`);
});
