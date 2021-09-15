const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const passport = require('passport')
const User = require('../../models/users')


passport.use('login', new LocalStrategy  ({
    email: 'email',
    password: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.getUser(email)
        if(!user){
            return done(null, false, { message: 'User not found'})
        }
        const encryptPass = user.rows[0].password
        bcrypt.compare(password, encryptPass, (err, result) => {
            if (err) {
                throw new Error(err)
            }
            if (result) {
                return done(null, user, { message: 'Login successfull'})
            } else {
                return done(null, false, { message: 'User not found'})
            }
        })

    } catch (error) {
        
    }
}));
passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})
