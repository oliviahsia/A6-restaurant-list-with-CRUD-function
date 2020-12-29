const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes)

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