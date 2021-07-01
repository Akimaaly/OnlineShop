/* eslint-disable no-plusplus */
/* eslint-disable spaced-comment */
const router = require('express').Router();
const { tokenChecker } = require('../middleware/protect');
const BasketModel = require('../models/basket.model');
const GoodModel = require('../models/good.model');

router.route('/all').get(tokenChecker, async (req, res) => {
  const state = await BasketModel.find({ buyer: req.user.id }).populate(
    'products'
  );
  res.json(state);
});

router.route('/:id').patch(tokenChecker, async (req, res) => {
  //Здесь мы обновляем нашу текущую корзину, добавляя в нее товары
  // сюда приходит id-товара и количество(req.body.qty)
  const arrOfIds = [];
  const pushGoodsId = (quantity, id) => {
    for (let i = 0; i < quantity; i++) {
      arrOfIds.push(id);
    }
    return arrOfIds;
  };
  async function fillingArray(newArr) {
    const arr = [];

    for (let i = 0; i < newArr.length; ++i) {
      const arraaay = await GoodModel.findById(newArr[i]);
      arr.push(arraaay);
    }
    return arr;
  }
  //
  //
  //
  //

  const arr = pushGoodsId(req.body.qty, req.params.id);
  const currentBasket = await BasketModel.findOne({ buyer: req.user.id });
  const newArr = [...arr, ...currentBasket?.products];
  const a = await fillingArray(newArr);
  const updatedBasket = await BasketModel.findOneAndUpdate(
    { buyer: req.user.id },
    {
      products: a,
      quantity: a.length,
      totalPrice: a.reduce((acc, el) => acc + Number(el.price), 0),
    },
    { new: true }
  ).populate('products');

  res.json(updatedBasket);
});

//========================================================================
// Здесь мы обновляем нашу текущую корзину, удаляя из нее товары
//сюда приходит id-товара который надо удалить из корзины
router.route('/update/:id').patch(tokenChecker, async (req, res) => {
  const currentBasket = await BasketModel.findOne({ buyer: req.user.id });
  const arr = currentBasket.products.filter((el) => el !== req.params.id);

  const updatedBasket = await BasketModel.findOneAndUpdate(
    { buyer: req.session.user },
    {
      products: arr,
      quantity: arr.length,
      totalPrice: arr.reduce((acc, el) => acc + el.price, 0),
    },
    { new: true }
  );

  // res.json(updatedBasket);
});

module.exports = router;
