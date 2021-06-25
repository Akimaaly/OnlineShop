const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { connect } = require('./src/db/config');
require('dotenv').config();

const basketRouter = require('./src/routes/basket.router');
const goodRouter = require('./src/routes/good.router');
const orderRouter = require('./src/routes/good.router');
const userRouter = require('./src/routes/user.router');

const app = express();
const PORT = 8080;

connect();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(morgan('dev'));

app.use('/basket', basketRouter);
app.use('/good', goodRouter);
app.use('/order', orderRouter);
app.use('/', userRouter);

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
