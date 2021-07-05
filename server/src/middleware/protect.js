const jwt = require('jsonwebtoken');

const tokenChecker = (req, res, next) => {
  if (req.meyhod === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
    }
    const decoder = jwt.verify(token, process.env.SESSION_KEY);
    req.user = decoder;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Пользователь не авторизован' });
  }
};

module.exports = { tokenChecker };
