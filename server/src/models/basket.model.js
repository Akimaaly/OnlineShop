/* eslint-disable spaced-comment */
/* ЭТО МОДЕЛЬ ТОВАРА */

const { Schema, model } = require('mongoose');

const basketSchema = Schema({
  quantity: Number,
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'Buyer',
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'GoodInBasket',
    },
  ],
  totalPrice: Number,
});

const goodInBasketSchema = Schema({
  basket: {
    type: Schema.Types.ObjectId,
    ref: 'Basket',
  },
  good: {
    type: Schema.Types.ObjectId,
    ref: 'Good',
  },
  qty: Number,
});

const GoodInBasketModel = model('GoodInBasket', goodInBasketSchema);
const BasketModel = model('Basket', basketSchema);

module.exports = { BasketModel, GoodInBasketModel };
