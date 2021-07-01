/* ЭТО МОДЕЛЬ ЗАКАЗА */

const { Schema, model } = require('mongoose');

const orderSchema = Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'Buyer',
  },
  date: String,
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Good',
    },
  ],

  status: {
    type: Boolean,
    default: false,
  },
});

const OrderModel = model('Order', orderSchema);

module.exports = OrderModel;
