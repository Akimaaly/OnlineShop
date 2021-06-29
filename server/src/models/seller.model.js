/* ЭТО МОДЕЛЬ ПРОДАВЦА */

const { Schema, model } = require('mongoose');

const sellerSchema = Schema({
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
  location: {
    type: String,
    required: false,
  },
  balance: {
    type: Number,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

const SellerModel = model('Seller', sellerSchema);

module.exports = SellerModel;
