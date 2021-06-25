/* ЭТО МОДЕЛЬ ЗАКАЗА */

const { Schema, model } = require('mongoose')

const orderSchema = Schema({
  good: {
    type: Schema.Types.ObjectId,
    ref: 'Good',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'Buyer',
  },
  deliveryAdress: {
    type: String,
    required: true,
  },
  sum: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    default: false,
  },
})

const OrderModel = model('Order', orderSchema)

module.exports = OrderModel
