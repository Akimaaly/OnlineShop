/* eslint-disable spaced-comment */
/* ЭТО МОДЕЛЬ ТОВАРА */

const { Schema, model } = require('mongoose');

const goodSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'https://pix10.agoda.net/geo/country/156/3_156_kyrgyzstan_02.jpg?s=1920x',
  },
  longDescription: {
    type: String,
    required: true,
  },
  articul: {
    type: String, //заменил на СТРИНГ
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  category: {
    type: String, //заменил на СТРИНГ
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
