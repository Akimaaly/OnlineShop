/* eslint-disable spaced-comment */
/* ЭТО РУЧКА ОБРАБОТКИ ТОВАРА */
const mongoose = require('mongoose');
const multer = require('multer');

const { ObjectId } = mongoose.Types;
const router = require('express').Router();
const GoodModel = require('../models/good.model');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../../client/public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

/*Получаем вообще все товары которые есть*/
router.route('/all').get(async (req, res) => {
  const allGoods = await GoodModel.find();
  console.log('lkmdvlmlfkmldfm');
  console.log(allGoods);
  res.json(allGoods);
});

/*добавляем новый товар*/
router.route('/new').post(async (req, res) => {
  const { title, longDescription, articul, residence, quantity, price } =
    req.body;
  const newGood = await GoodModel.create({
    title,
    longDescription,
    articul,
    category: residence.join(','),
    quantity: Number(quantity),
    price: Number(price),
    seller: ObjectId('60d5e39bd7e8203cfc215d61'),
  });
  res.json(newGood);
});

/*получаем товары конкретного продавца с помощью id-продавца*/
router
  .route('/:id')
  .get(async (req, res) => {
    const allGoods = await GoodModel.find({ seller: req.params.id });
    res.json(allGoods);
  })
  /*удаление товара продавца с помощью id-товара*/
  .delete(async (req, res) => {
    await GoodModel.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  });

module.exports = router;
