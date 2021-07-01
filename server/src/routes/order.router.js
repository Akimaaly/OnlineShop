const router = require('express').Router();
const { tokenChecker } = require('../middleware/protect');
const GoodModel = require('../models/good.model');
const OrderModel = require('../models/order.model');

router.route('/all/:id').get(tokenChecker, async (req, res) => {
  const allOrdersOfCurrentSeller = await OrderModel.find({
    seller: req.user.id,
  }).populate('buyer');
  const allOrdersOfCurrentBuyer = await OrderModel.find({
    buyer: req.user.id,
  }).populate('seller');
  if (req.user.role === 'seller') {
    // return res.json(allOrdersOfCurrentSeller);
  } else {
    // return res.json(allOrdersOfCurrentBuyer);
  }
  console.log('seller >>>>>>>>>>>', allOrdersOfCurrentSeller);
  console.log('buyer >>>>>>>>>>>', allOrdersOfCurrentBuyer);
});

router.route('/new').post(tokenChecker, async (req, res) => {
  const goodId = req.body.items[0];
  const good = await GoodModel.findById(goodId);
  const newOrder = await OrderModel.create({
    buyer: req.user.id,
    seller: good.seller,
    date: String(Date.now()),
    items: req.body.items
  });

  res.json(newOrder)
});

module.exports = router;
