/* eslint-disable spaced-comment */
/* ЭТО РУЧКА ОБРАБОТКИ ТОВАРА */
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const router = require('express').Router();
const GoodModel = require('../models/good.model');

/*Получаем вообще все товары которые есть*/
router.route('/all').get(async (req, res) => {
  const allGoods = await GoodModel.find();
  console.log('lkmdvlmlfkmldfm');
  console.log(allGoods);
  res.json(allGoods);
});

/*добавляем новый товар*/
router.route('/new').post(upload.single('file'), async (req, res) => {
  const { title, longDescription, articul, residence, quantity, price } =
    req.body;
  const newGood = await GoodModel.create({
    title,
    longDescription,
    articul,
    category: residence[1],
    quantity: Number(quantity),
    price: Number(price),
    seller: ObjectId('60d5e39bd7e8203cfc215d61'),
  });
  if (
    req.file &&
    req.file.mimetype != 'image/jpeg' &&
    req.file.mimetype != 'image/png'
  )
    return res.json({
      status: 1,
      message: 'Please Choose JPG or PNG images',
    });
  if (req.file) {
    let image = '/images/' + req.file.filename;
    res.json({
      status: 0,
      message: 'Successfully saved',
      path: image,
    });
  }
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
