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
      ref: 'Good',
    },
  ],
  totalPrice: Number,
});

const BasketModel = model('Basket', basketSchema);

module.exports = BasketModel;
