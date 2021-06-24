/* ЭТО МОДЕЛЬ ТОВАРА */

const { Schema, model } = require('mongoose')

const goodSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  articul: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  category: {
    type: Number,
    required: true,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller',
  },
  price: {
    type: Number,
    required: true,
  },
})

const GoodModel = model('Good', goodSchema)

module.exports = GoodModel
