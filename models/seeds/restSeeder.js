const mongoose = require('mongoose')
const Restaurant = require('../restaurant')

// 載入json種子資料
const restList = require('./restaurant.json')

const db = mongoose.connection
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })


db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongoose connection!')
  for (let i = 0; i < restList.results.length; i++) {
    Restaurant.create(restList.results[i])
  }
  console.log('done.')
})
