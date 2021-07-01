import styles from './styles.module.css';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BasketItem from '../BasketItem/BasketItem';

import { deleteFromBasket } from '../../../../Redux/actions/basket.actions';

export default function BuyerBasket() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.basket);
  const { products } = cart;
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/basket/all').then((res) => {
      setBasket(res.data);
    });
  }, []);
  console.log('============', products);

  //функция добавления товара в корзину
  // const qtyChangeHandler = (id, qty) => {
  //   dispatch(addToBasket(id, qty));
  // };

  //функция удаления товара из корзины
  const removeFromCartHandler = (id) => {
    dispatch(deleteFromBasket(id));
  };

  // функция для подсчета количества товаров в корзине
  const getCartCount = () => {
    return basket?.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  //подсчет общего количества денег
  const getCartSubTotal = () => {
    return basket
      ?.reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.cartscreen}>
      <div className={styles.cartscreen__left}>
        <h2>Ваша корзина покупок</h2>
        {basket ? (
          <div>
            Пока что корзина пуста
            <Link to='/'>На главную</Link>
          </div>
        ) : (
          basket?.map((item) => (
            <BasketItem
              key={item._id}
              item={item}
              // qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className={styles.cartscreen__right}>
        <div className={styles.cartscreen__info}>
          <p>Общее количество товаров ({getCartCount()}) шт.</p>
          <p>{getCartSubTotal()} р.</p>
        </div>
        <div>
          <button>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
}
