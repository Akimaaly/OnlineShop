/* eslint-disable spaced-comment */
/* ЭТО РУЧКА ОБРАБОТКИ ТОВАРА */
const mongoose = require('mongoose');
const multer = require('multer');
const { tokenChecker } = require('../middleware/protect');
const { ObjectId } = mongoose.Types;
const router = require('express').Router();
const GoodModel = require('../models/good.model');

/*Получаем вообще все товары которые есть*/
router.route('/all').get(async (req, res) => {
  const allGoods = await GoodModel.find();
  res.json(allGoods);
});

/*добавляем новый товар*/
router.route('/new').post(tokenChecker, async (req, res) => {
  const { title, longDescription, articul, residence, quantity, price } =
    req.body;

  // в каждую ручку на беке нужно доварить tokenChecker он записывает все данные ures в req.user

  const newGood = await GoodModel.create({
    title,
    longDescription,
    articul,
    category: residence[1],
    quantity: Number(quantity),
    price: Number(price),
    seller: ObjectId(req.user.id),
  });
  res.json(newGood);
});

/*получаем товары конкретного продавца с помощью id-продавца*/
router
  .route('/:id')
  .get(tokenChecker, async (req, res) => {
    try {
      const allGoods = await GoodModel.find({ seller: req.params.id });
      res.json(allGoods);
    } catch (error) {
      console.log(error);
    }
  })
  /*удаление товара продавца с помощью id-товара*/
  .delete(async (req, res) => {
    await GoodModel.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  });

  router.route('/:id')
  .delete(async (req, res) => {
    await GoodModel.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
  })

module.exports = router
