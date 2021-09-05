const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:123abc@cluster0.ixhhu.mongodb.net/jobapp?retryWrites=true&w=majority', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to DDBB established"));





module.exports = mongoose;