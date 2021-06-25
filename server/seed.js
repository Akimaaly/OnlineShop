const { connect, disconnect } = require('../server/src/db/config');
const GoodModel = require('./src/models/good.model');
const SellerModel = require('./src/models/seller.model');

const catListGoods = [
  {
    title: 'Кеды Converse',
    image:
      'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    shortDescription: 'Вечная классика',
    longDescription: 'Лучшие кроссовки, для тех, кому 18 лет в душе',
    articul: 'shoes001',
    quantity: 12,
    category: 'Обувь',
    seller: 'Обувник ООО',
    price: 4500,
  },
  {
    title: 'Кеды Converse',
    image:
      'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    shortDescription: 'Вечная классика',
    longDescription: 'Лучшие кроссовки, для тех, кому 18 лет в душе',
    articul: 'shoes001',
    quantity: 12,
    category: 'Обувь',
    seller: 'Обувник ООО',
    price: 4500,
  },
];

const catListSeller = [
  {
    name: 'ООО Обувник',
    email: '123@mail.ru',
    phoneNumber: 9221234567,
    location: 'Москва, ул. Орджоникидзе 11',
    balance: 10000,
    password: 'Обувь',
  },
];

connect();

async function seed() {
  await Promise.all(catListGoods.map((el) => GoodModel.create(el)));
}

seed();
//disconnect();
