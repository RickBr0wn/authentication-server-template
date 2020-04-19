require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./Routes')

const app = express()
const port = 5000

// If using a cloud based solution replace 'mongodb://localhost:27017/express-mongoose-template'
// with the connection string supplied by your cloud supplier.
mongoose.connect(
  'mongodb://localhost:27017/express-mongoose-template',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Successfully connected to database.')
  }
).catch(err => console.error(err))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ title: 'Express & Mongoose Template' })
})

app.use('/api', router)

app.listen(port, () => console.log(`Express dev server started on port ${port}`))