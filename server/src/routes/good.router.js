/* ЭТО РУЧКА ОБРАБОТКИ ТОВАРА */

const GoodModel = require('../models/good.model')

const router = require('express').Router()

router.route('/selleritems')
  .get(async (req, res) => {
    const allItemsOfCurrentSeller = await GoodModel.find()
    res.json(allItemsOfCurrentSeller)
  })
  .post(async (req, res) => {
    const {title, shortDescription, articul} = req.body
    console.log(req.body);
    const newGood = await GoodModel.create({title, shortDescription, articul})
       res.json(newGood)
  })
  .patch((req, res) => {

  })
  .delete((req, res) => {

  })

  router.route('/:id')
  .delete(async (req, res) => {
    await GoodModel.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
  })

module.exports = router
