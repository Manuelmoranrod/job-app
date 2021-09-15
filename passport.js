// const passport = require('passport');
// const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require('bcrypt');

// const mongoose = require("mongoose");
// require('dotenv').config()

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on("error", error => console.log(error));
// db.once("open", () => console.log("Connection to DDBB established"));

// app.use(passport.initialize())
// app.use(passport.session())
//Definimos localstrategy con postgres;

// passport.use('local', new LocalStrategy({passReqToCallBack: true},( user, password, cb )=> {
//     console.log("this is being executed");
//     dbsql.query("SELECT * FROM users WHERE email=$1", [email], (err, result) => {
//         if(err){
//             return cb(err);

//         }
//         if(result.rows.length > 0){
//             const first = result.rows[0];
//             bcrypt.compare(password, first.password, (err, res) => {
//                 if(res){
//                     cb(null, {
//                         id: first.id,
//                         user: first.user
//                     })
//                 }
//                 else {
//                     cb(null, false);
//                 }
//             })
//         }
//         else {
//             cb(null, false);
//         }
//     })
// }));


// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'pass'
//   },
//   (username, password, done) => {
//     log.debug("Login process:", username);
//     return dbsql.query("SELECT * FROM users WHERE email=$1", [user, password])
//       .then((result)=> {
//         return done(null, result);
//       })
//       .catch((err) => {
//         log.error("/login: " + err);
//         return done(null, false, {message:'Usuario o password errónea'});
//       });
//   }));



  ///

//   passport.use(new LocalStrategy((username, password, cb) => {
//     dbsql.query('SELECT id, username, password, type FROM users WHERE username=$1', [username], (err, result) => {
//       if(err) {
//         winston.error('Error when selecting user on login', err)
//         return cb(err)
//       }
  
//       if(result.rows.length > 0) {
//         const first = result.rows[0]
//         bcrypt.compare(password, first.password, function(err, res) {
//           if(res) {
//             cb(null, { id: first.id, username: first.username, type: first.type })
//            } else {
//             cb(null, false)
//            }
//          })
//        } else {
//          cb(null, false)
//        }
//     })
//   }))






//   passport.serializeUser((user, done)=>{
//     //log.debug("serialize ", user);
//     console.log("serialize user is executing")
//     done(null, user_id);
//   });

//   passport.deserializeUser((id, done)=>{
//     dbsql.query("SELECT * FROM users WHERE email=$1", [id])
//     .then((user)=>{
//       done(null, user);
//     })
//     .catch((err)=>{
//       done(new Error(`User with the id ${id_user} does not exist`));
//     })
//   });



