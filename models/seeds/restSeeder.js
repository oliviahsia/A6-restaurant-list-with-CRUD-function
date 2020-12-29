const Restaurant = require('../restaurant')

// 載入json種子資料
const restList = require('./restaurant.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < restList.results.length; i++) {
    Restaurant.create(restList.results[i])
  }
  console.log('done.')
})
