/* eslint-disable spaced-comment */
/* ЭТО МОДЕЛЬ ТОВАРА */

const { Schema, model } = require('mongoose');

const goodSchema = Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
    default:
      'https://images-na.ssl-images-amazon.com/images/I/71Y67UzW5GL.jpg',
  },
  longDescription: {
    type: String,
  },
  articul: {
    type: String, //заменил на СТРИНГ
    required: true,
  },
  quantity: {
    type: String,
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
    type: String,
  },
});

const GoodModel = model('Good', goodSchema);

module.exports = GoodModel;
