/* eslint-disable no-plusplus */
/* eslint-disable spaced-comment */
const router = require('express').Router();
const { tokenChecker } = require('../middleware/protect');
const { BasketModel, GoodInBasketModel } = require('../models/basket.model');
const GoodModel = require('../models/good.model');

router.route('/all').get(tokenChecker, async (req, res) => {
  const state = await BasketModel.findOne({ buyer: req.user.id })
    .populate({
      path: 'products',
      populate: [{ path: 'good' }, { path: 'basket' }],
    })
    .lean()
    .exec();
  let totalQty = 0;
  let totalPrice = 0;
  state.products.forEach((productInGroup) => {
    totalQty += productInGroup.qty;
    totalPrice += Number(productInGroup.good.price) * productInGroup.qty;
  });
  state.quantity = totalQty;
  state.totalPrice = totalPrice;
  res.json(state);
});

router.route('/:id').patch(tokenChecker, async (req, res) => {
  // Здесь мы обновляем нашу текущую корзину, добавляя в нее товары
  // сюда приходит id-товара и количество(req.body.qty)

  const currentBasket = await BasketModel.findOne({ buyer: req.user.id });
  const currentBasketItem = await GoodInBasketModel.findOne({
    good: req.params.id,
    basket: currentBasket.id,
  });

  let newQty = req.body.qty;
  if (currentBasketItem !== null && !req.body.updateQty) {
    newQty = currentBasketItem.qty + req.body.qty;
  }

  if (currentBasketItem !== null) {
    currentBasketItem.delete();
  }

  const newBasketItem = await GoodInBasketModel.create({
    good: req.params.id,
    basket: currentBasket.id,
    qty: newQty,
  });
  await BasketModel.findOneAndUpdate(
    { buyer: req.user.id },
    // eslint-disable-next-line no-underscore-dangle
    { products: [...currentBasket.products, newBasketItem._id] }
  );

  const updatedBasket = await BasketModel.findOne({ buyer: req.user.id })
    .populate({
      path: 'products',
      populate: [{ path: 'good' }, { path: 'basket' }],
    })
    .lean()
    .exec();
  let totalQty = 0;
  let totalPrice = 0;
  updatedBasket.products.forEach((productInGroup) => {
    totalQty += productInGroup.qty;
    totalPrice += Number(productInGroup.good.price) * productInGroup.qty;
  });
  updatedBasket.quantity = totalQty;
  updatedBasket.totalPrice = totalPrice;

  res.json(updatedBasket);
});

//========================================================================
// Здесь мы обновляем нашу текущую корзину, удаляя из нее товары
//сюда приходит id-товара который надо удалить из корзины
router.route('/update/:id').patch(tokenChecker, async (req, res) => {
  const currentBasket = await BasketModel.findOne({ buyer: req.user.id });
  // eslint-disable-next-line no-underscore-dangle
  const currItem = await GoodInBasketModel.findOne({
    basket: currentBasket._id,
    good: req.params.id,
  });
  // eslint-disable-next-line no-underscore-dangle
  BasketModel.updateOne(
    { buyer: req.user.id },
    { products: currentBasket.products.filter((p) => p.id !== currItem._id) }
  );
  // eslint-disable-next-line no-underscore-dangle
  await GoodInBasketModel.deleteOne({
    basket: currentBasket._id,
    good: req.params.id,
  });
  res.json(currentBasket);
});

module.exports = router;
