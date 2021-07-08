const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const { connect } = require('./src/db/config');
require('dotenv').config();

const basketRouter = require('./src/routes/basket.router');
const goodRouter = require('./src/routes/good.router');
const userRouter = require('./src/routes/user.router');
const orderRouter = require('./src/routes/order.router');

const app = express();
const PORT = 8080;

connect();
app.use(express.static('public'));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(fileUpload({}));
app.use(morgan('dev'));

// app.use('/basket', basketRouter);
app.use('/good', goodRouter);
app.use('/order', orderRouter);
app.use('/basket', basketRouter);
app.use('/', userRouter);

app.post('/upload', (req, res) => {
  req.files.file.mv(`public/images/${req.files.file.name}`);
});

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
