/* ЭТО МОДЕЛЬ ТОВАРА */

const { Schema, model } = require('mongoose')

const goodSchema = Schema({
  title: {
    type: String,
    
  },
  shortDescription: {
    type: String,
    
  },
  longDescription: {
    type: String,
    
  },
  articul: {
    type: Number,
    
  },
  quantity: {
    type: String,
    default: 1,
  },
  category: {
    type: Number,
    
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller',
  },
  price: {
    type: String,
    
  },
})

const GoodModel = model('Good', goodSchema)

module.exports = GoodModel
