/* ЭТО РУЧКА ОБРАБОТКИ ТОВАРА */

const GoodModel = require('../models/good.model')

const router = require('express').Router()

router.route('/')
  .get((req, res) => {

  })
  .post((req, res) => {

  })
  .patch((req, res) => {

  })
  .delete((req, res) => {

  })

router.route('/all')
  .get(async(req, res) => {
    const allGoods = await GoodModel.find()
    res.json(allGoods)
  })

module.exports = router
