const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./Models/User')
const JWTStrategy = require('passport-jwt').Strategy

const cookieExtractor = req => {
  let token = null
  if (req && req.cookies) {
    token = req.cookies['access-token']
  }
  return token
}

// protect endpoints
passport.use(new JWTStrategy({
  jwtFromRequest: cookieExtractor,
  secretOrKey: 'a-dummy-key'
}, (payload, done) => {
  User.findById({ _id: payload.sub }, (err, user) => {
    if (err) {
      return done(err, false)
    }
    if (user) {
      return done(null, user)
    }
    return done(null, false)
  })
}))

// Authentication
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    // something went wrong with the database
    if (err) {
      return done(err)
    }
    // If attempt to log in is with unknown user
    if (!user) {
      return done(null, false)
    }
    // compare the passwords using method we created in the User model (comparePassword)
    user.comparePassword(password, done)
  })
}))