const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
const app = express()

app.use(express.static('public'))


mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(methodOverride('_method'))
app.use(routes)

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
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'hbs')

//app.get('/search', (req, res) => {
//  res.render('index', { restaurant })
//})

app.listen(3000, () => {
  console.log('App is running')
})