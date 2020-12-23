const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Restaurant = require('./models/restaurant')

const app = express()

app.use(express.static('public'))

mongoose.connect('mongodb://localhost/restauran-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongoose connection!')
})

app.engine('hbs', exphbs({
  defaultLayout: 'main', extname: '.hbs'
}))
app.set('view engine', 'hbs')



app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

app.listen(3000, () => {
  console.log('App is running')
})