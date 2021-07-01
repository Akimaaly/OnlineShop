import styles from './styles.module.css';
import axios from 'axios'


import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BasketItem from '../BasketItem/BasketItem';

import {deleteFromBasket, initBasket, updateInBasket} from '../../../../Redux/actions/basket.actions';

export default function BuyerBasket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basketItems);

  useEffect(() => {
    dispatch(initBasket())
  }, [dispatch]);

  // функция изменения количества товаров
  const qtyChangeHandler = (id, qty) => {
    dispatch(updateInBasket(id, qty));
  };

  //функция удаления товара из корзины
  const removeFromCartHandler = (id) => {
    dispatch(deleteFromBasket(id));
  };

  // функция для подсчета количества товаров в корзине
  const getCartCount = () => {
    return Number(basket.quantity)
  };

  //подсчет общего количества денег
  const getCartSubTotal = () => {
    return Number(basket.totalPrice)
  };

  return (
    <div className={styles.cartscreen}>
      <div className={styles.cartscreen__left}>
        <h2>Ваша корзина покупок</h2>
        {basket.length === 0 ? (
          <div>
            Пока что корзина пуста
            <Link to='/'>На главную</Link>
          </div>
        ) : (
          basket.products.map((item) => (
            <BasketItem
              key={item._id}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className={styles.cartscreen__right}>
        <div className={styles.cartscreen__info}>
          <p>Общее количество товаров {getCartCount()} шт.</p>
          <p>₽ {getCartSubTotal()}</p>
        </div>
        <div>
          <button style={{background: '#283655', fontWeight: 'bold'}}>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
}
