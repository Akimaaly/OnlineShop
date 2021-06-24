/* ЭТО МОДЕЛЬ ПОКУПАТЕЛЯ */

const { Schema, model } = require('mongoose')

const buyerSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const BuyerModel = model('Buyer', buyerSchema)

module.exports = BuyerModel
