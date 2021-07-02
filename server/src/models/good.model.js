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
      // 'https://pix10.agoda.net/geo/country/156/3_156_kyrgyzstan_02.jpg?s=1920x',
      'https://kitobz.com/image/cache/catalog/easyphoto/7617/screenshot-58-jpg-1-1600x900-product_popup.jpg'
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
