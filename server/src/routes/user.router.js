/* ЭТО РУЧКА ОБРАБОТКИ ПОЛЬЗОВАТЕЛЯ */

const router = require('express').Router();
const Buyer = require('../models/buyer.model');
const SellerModel = require('../models/seller.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { tokenChecker } = require('../middleware/protect');

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
      const jwtToken = jwt.sign({ id: user._id }, process.env.SESSION_KEY, {
        expiresIn: '24h',
      });
      return res.status(200).json({
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role,
        token: jwtToken,
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

      console.log('=====', seller);
      // const jwtToken = jwt.sign({ id: seller._id }, process.env.SESSION_KEY, {
      //   expiresIn: '24h',
      // });
      // return res.status(200).json({
      //   name: seller.name,
      //   email: seller.email,
      //   phoneNumber: seller.phoneNumber,
      //   role,
      //   token: jwtToken,
      //   location: 'hs',
      //   balance: 9,
      // });
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
      const jwtToken = jwt.sign(
        { id: currentUser._id },
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
        name: currentUser.name,
        email: currentUser.email,
        role,
        token: jwtToken,
      });
    }
    if (role === 'seller') {
      const currentSeller = await SellerModel.findOne({ email });
      const jwtToken = jwt.sign(
        { id: currentSeller._id },
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
  return res.status(200).json({});
});

module.exports = router;
