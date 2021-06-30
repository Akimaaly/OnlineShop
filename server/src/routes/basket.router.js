/* eslint-disable no-plusplus */
/* eslint-disable spaced-comment */
const router = require('express').Router();
const { tokenChecker } = require('../middleware/protect');
const BasketModel = require('../models/basket.model');

//Здесь мы обновляем нашу текущую корзину, добавляя в нее товары
// сюда приходит id-товара и количество(req.body.qty)
const pushGoodsId = (quantity, id) => {
  const arrOfIds = [];
  for (let i = 0; i < quantity; i++) {
    arrOfIds.push(id);
  }
  return arrOfIds;
};

router.route('/:id').patch(tokenChecker, async (req, res) => {
  const arr = pushGoodsId(req.body.qty, req.params.id);
  const currentBasket = await BasketModel.findOne({ buyer: req.user.id }); //?
  const newArr = arr.concat(currentBasket.products);
  const resultArr = [];
  for (let i = 0; i < newArr.length; i++) {
    BasketModel.findById(newArr[i]).then((result) => resultArr.push(result));
  }

  const updatedBasket = await BasketModel.findOneAndUpdate(
    { buyer: req.session.user },
    {
      products: resultArr,
      quantity: resultArr.length,
      totalPrice: resultArr.reduce((acc, el) => acc + el.price, 0),
    },
    { new: true }
  );

  console.log(updatedBasket);
  // res.json(updatedBasket);
});

//========================================================================
// Здесь мы обновляем нашу текущую корзину, удаляя из нее товары
//сюда приходит id-товара который надо удалить из корзины
router.route('/update/:id').patch(tokenChecker, async (req, res) => {
  console.log(req.params.id);
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
  console.log(updatedBasket);
  // res.json(updatedBasket);
});

module.exports = router;
