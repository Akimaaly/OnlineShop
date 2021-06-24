/* ЭТО МОДЕЛЬ КОРЗИНЫ */

const { Schema, model } = require('mongoose')

const basketSchema = Schema({
  good: {
    type: Schema.Types.ObjectId,
    ref: 'Good',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'Buyer',
  },
  quantity: {
    type: Number,
    default: 1,
  },
  sum: {
    type: Number,
    required: true,
  },
})

const BasketModel = model('Basket', basketSchema)

module.exports = BasketModel
