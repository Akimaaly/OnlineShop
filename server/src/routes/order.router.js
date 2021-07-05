const router = require('express').Router();
const { tokenChecker } = require('../middleware/protect');
const { findOne } = require('../models/good.model');
const GoodModel = require('../models/good.model');
const OrderModel = require('../models/order.model');

router.route('/all').get(tokenChecker, async (req, res) => {
  const allOrdersOfCurrentSeller = await OrderModel.find({
    seller: req.user.id,
  })
    .populate('buyer')
    .populate('items');
  const allOrdersOfCurrentBuyer = await OrderModel.find({
    buyer: req.user.id,
  })
    .populate('seller')
    .populate('items');

  if (req.user.role === 'seller') {
    return res.json(allOrdersOfCurrentSeller);
  }
  return res.json(allOrdersOfCurrentBuyer);
});

router.route('/new').post(tokenChecker, async (req, res) => {
  const goodId = req.body.orders[0];
  const good = await GoodModel.findById(goodId);
  const newOrder = await OrderModel.create({
    buyer: req.user.id,
    seller: good.seller,
    date: req.body.date,
    items: req.body.orders,
  });

  res.json(newOrder);
});

router.route('/status/:id').patch(async (req, res) => {
  console.log(req.params.id);
  const currentOrder = await OrderModel.findById(req.params.id);
  const updatedStatus = await OrderModel.findByIdAndUpdate(
    req.params.id,
    {
      status: !currentOrder.status,
    },
    { new: true },
  ).populate('items');
  console.log(updatedStatus);
  res.json(updatedStatus);
});

module.exports = router;
