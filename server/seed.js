const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const { connect, disconnect } = require('../server/src/db/config');
const GoodModel = require('./src/models/good.model');
const SellerModel = require('./src/models/seller.model');

const catListGoods = [
  {
    title: 'Кеды Converse',
    image:
      'https://images.unsplash.com/photo-1576190215096-4541ac2a3364?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Вечная классика',
    longDescription: 'Лучшие кроссовки, для тех, кому 18 лет в душе',
    articul: 'shoes001',
    quantity: 12,
    category: 'men_shoes',
    seller: ObjectId('60d5e39bd7e8203cfc215d61'),
    price: 4500,
  },
  {
    title: 'Iphone 12 mini',
    image:
      'https://images.unsplash.com/photo-1612100577176-b976eff1d10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',
    shortDescription: 'Последний Mini смартфон от Apple',
    longDescription:
      'Смартфонов в формате Mini больше не будет, успевайте приобрести',
    articul: 'phone001',
    quantity: 10,
    category: 'phones',
    seller: ObjectId('60d5e39bd7e8203cfc215d61'),
    price: 67000,
  },
  {
    title: 'The Foxfire Book',
    image:
      'https://images.unsplash.com/photo-1619212099013-f143f0eba952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    shortDescription: 'Отличная книга',
    longDescription: 'Идеальная книга, чтобы скоротать вечерок',
    articul: 'book001',
    quantity: 10,
    category: 'literature',
    seller: ObjectId('60d5e39bd7e8203cfc215d61'),
    price: 600,
  },
  {
    title: 'Валики с краской',
    image:
      'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    shortDescription: 'Наполни жизнь красками',
    longDescription: 'Набор для тех, кто хочет раскарасить свои серые будни',
    articul: 'tools001',
    quantity: 2,
    category: 'tools',
    seller: ObjectId('60d5e39bd7e8203cfc215d61'),
    price: 3500,
  },
  {
    title: 'Ручка Parker',
    image:
      'https://images.unsplash.com/photo-1553101568-34bd00376c40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    shortDescription: 'Только для больших боссов',
    longDescription:
      'Специальный инструмент для подписания миллионных контрактов',
    articul: 'pens001',
    quantity: 23,
    category: 'office_supplies',
    seller: ObjectId('60d5e39bd7e8203cfc215d61'),
    price: 1200,
  },
  {
    title: 'Зимняя экипировка',
    image:
      'https://images.unsplash.com/photo-1611124601110-f804e03a2a6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    shortDescription: 'Не для лыжников',
    longDescription:
      'Комплект экпировки для снойбордиста, размер L, лыжников прошу не беспокоить',
    articul: 'equip001',
    quantity: 1,
    category: 'sports',
    seller: ObjectId('60d5e39bd7e8203cfc215d61'),
    price: 33000,
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
