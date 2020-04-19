const mongoose = require('mongoose')
const Data = require('../Models/Data')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 15
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user']
  },
  datas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Data' }]
})

// Before saving User.save() fires, we will check to see if the password is hashed
// If so, we just skip
// If not we hash the password and set the updated User object to the req object
UserSchema.pre('save', function (next) {
  // skips if password is hashed
  if (this.isModified('password')) {
    next()
  }
  // hash the password
  bcrypt.hash(this.password, 10, (err, encrypted) => {
    // skip if err
    if (err) {
      next(err)
    }
    // set the `this` password to the encrypted password returned from the `hash` function
    this.password = encrypted
    next()
  })
})

// compare the hash sent by the client with the one stored on the database
UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare((password, this.password, (err, isMatch) => {
    // If error skip
    if (err) {
      return cb(err)
    }
    // isMatch is false, return no error only `false`
    if (!isMatch) {
      return cb(null, isMatch)
    }
    // this will attach the `user` to the `req` object
    return cb(this)
  }))
}

module.exports = mongoose.model('User', UserSchema)