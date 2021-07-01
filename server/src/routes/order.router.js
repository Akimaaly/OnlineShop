const router = require('express').Router();
const { tokenChecker } = require('../middleware/protect');
const GoodModel = require('../models/good.model');
const OrderModel = require('../models/order.model');

router.route('/all').get(tokenChecker, async (req, res) => {
  const allOrdersOfCurrentSeller = await OrderModel.find({
    seller: req.user.id,
  }).populate('buyer').populate('items');
  const allOrdersOfCurrentBuyer = await OrderModel.find({
    buyer: req.user.id,
  }).populate('seller');

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

  // res.json(newOrder);
  console.log(newOrder);
});

module.exports = router;
