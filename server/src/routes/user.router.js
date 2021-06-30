/* eslint-disable object-shorthand */
/* ЭТО РУЧКА ОБРАБОТКИ ПОЛЬЗОВАТЕЛЯ */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const Buyer = require('../models/buyer.model');
const SellerModel = require('../models/seller.model');
const { tokenChecker } = require('../middleware/protect');
const BasketModel = require('../models/basket.model');

router.post('/reg', async (req, res) => {
  const { name, email, password, role, phone } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, +process.env.SALTROUNDS);
    if (role === 'user') {
      const user = await Buyer.create({
        name,
        email,
        phoneNumber: phone,
        password: hashPass,
      });
      const basket = await BasketModel.create({
        buyer: user.id,
        products: [],
        totalPrice: 0,
        quantity: 0,
      });
      const jwtToken = jwt.sign(
        {
          id: user._id,
          name: user.name,
          role: role,
          email: user.email,
          phoneNumber: user.phoneNumber,
          buyer: user.id,
          products: basket.products,
          totalPrice: basket.totalPrice,
          quantity: basket.quantity,
        },
        process.env.SESSION_KEY,
        {
          expiresIn: '24h',
        }
      );

      return res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phoneNumber,
        role,
        token: jwtToken,
        products: basket.products,
        totalPrice: basket.totalPrice,
        quantity: basket.quantity,
      });
    }
    if (role === 'seller') {
      const seller = await SellerModel.create({
        name,
        email,
        phoneNumber: phone,
        password: hashPass,
        location: 'hs',
        balance: 9,
      });

      const jwtToken = jwt.sign(
        {
          id: seller._id,
          name: seller.name,
          role: role,
          email: seller.email,
          phoneNumber: seller.phoneNumber,
        },
        process.env.SESSION_KEY,
        {
          expiresIn: '24h',
        }
      );
      return res.status(200).json({
        id: seller._id,
        name: seller.name,
        email: seller.email,
        phone: seller.phoneNumber,
        role,
        token: jwtToken,
        location: 'hs',
        balance: 9,
      });
    }
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ mess: 'Такой пользователь уже существует' });
    }
  }
});

router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    if (role === 'user') {
      const currentUser = await Buyer.findOne({ email });
      const currentBasket = await BasketModel.findOne({
        buyer: currentUser._id,
      });
      console.log(currentBasket);

      const jwtToken = jwt.sign(
        {
          id: currentUser._id,
          name: currentUser.name,
          role: role,
          email: currentUser.email,
          phone: currentUser.phoneNumber,
          currentBasket: currentBasket,
        },
        process.env.SESSION_KEY,
        {
          expiresIn: '24h',
        }
      );

      if (
        !currentUser ||
        !(await bcrypt.compare(password, currentUser.password))
      ) {
        return res.status(400).json({ mess: 'Неверный логин или пароль' });
      }
      return res.status(200).json({
        id: currentUser._id,
        phone: currentUser.phoneNumber,
        name: currentUser.name,
        email: currentUser.email,
        role,
        token: jwtToken,
        currentBasket: currentBasket,

      });
    }
    if (role === 'seller') {
      const currentSeller = await SellerModel.findOne({ email });
      const jwtToken = jwt.sign(
        {
          id: currentSeller._id,  
          name: currentSeller.name,
          role: role,
          email: currentSeller.email,
          phone: currentSeller.phoneNumber,
        },
        process.env.SESSION_KEY,
        {
          expiresIn: '24h',
        }
      );
      if (
        !currentSeller ||
        !(await bcrypt.compare(password, currentSeller.password))
      ) {
        return res.status(400).json({ mess: 'Неверный логин или пароль' });
      }
      return res.status(200).json({
        id: currentSeller._id,
        phone: currentSeller.phoneNumber,
        name: currentSeller.name,
        email: currentSeller.email,
        role,
        token: jwtToken,
      });
    }
  } catch (error) {
    return res.status(400).json({ mess: 'Неверный логин или пароль' });
  }
});

router.get('/logout', (req, res) => {
  return res.status(200).json({});
});

router.get('/', tokenChecker, (req, res) => {
  console.log('========>', req.user);
  return res.status(200).json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role,
    phone: req.user.phone,
    products: req.user.products,
    totalPrice: req.user.totalPrice,
    quantity: req.user.quantity,
  });
});

router.patch('/profile', async (req, res) => {
  const { name, phone, id, type } = req.body;

  if (type === 'name')
    await Buyer.findOneAndUpdate({ _id: id }, { name: name });
  if (type === 'phone')
    await Buyer.findOneAndUpdate({ _id: id }, { phoneNumber: phone });

  const user = await Buyer.findOne({ _id: id });

  const jwtToken = jwt.sign(
    {
      id: user._id,
      name: user.name,
      role: user.role,
      email: user.email,
      phone: user.phoneNumber,
    },
    process.env.SESSION_KEY,
    {
      expiresIn: '24h',
    }
  );

  return res.status(200).json({
    id: user._id,
    phone: user.phoneNumber,
    name: user.name,
    email: user.email,
    role: user.role,
    token: jwtToken,
  });
});

module.exports = router;
