import styles from './styles.module.css';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  addToBasket,
  basketAddGood,
  deleteFromBasket,
  clearBasket,
} from '../../../../Redux/actions/basket.actions';
import { createOrder } from '../../../../Redux/actions/order.actions';
import { useEffect, useState } from 'react';
import api from '../../../../api';

export default function BuyerBasket() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const cart = useSelector((state) => state.basket);

  // const { products } = cart;
  // const [basket, setBasket] = useState([]);

  const basket = useSelector((store) => store.basket);

  const fetchBasketAll = async () => {
    const response = await api.getAllBasket();
    const data = {
      ...response[0],
      products: response[0].products.reduce((acum, item) => {
        const index = acum.findIndex((el) => el._id === item._id);
        if (index === -1) acum = [...acum, { ...item, count: 1 }];
        else acum[index] = { ...acum[index], count: acum[index].count + 1 };
        return acum;
      }, []),
    };
    // console.log(data);
    dispatch(basketAddGood(data));
    // setBasket([data]);
  };
  useEffect(() => {
    dispatch(initBasket());
  }, [dispatch]);

  //функция удаления товара из корзины
  const removeFromCartHandler = (id) => {
    dispatch(deleteFromBasket(id));
  };

  // функция для подсчета количества товаров в корзине
  const getCartCount = () => {
    return basket?.products?.reduce(
      (qty, item) => Number(item.quantity) + qty,
      0
    );
  };

  //подсчет общего количества денег
  // const getCartSubTotal = () => {
  //   return basket?.products
  //     ?.reduce((price, item) => price + item.totalPrice, 0)
  //     .toFixed(2);
  // };

  const qtyChangeHandler = () => {};

  const createNewOrder = async () => {
    const items = basket.products?.map((el) => el._id);
    let dat = new Date();
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    let dateNow = dat.toLocaleString('ru-RU', options);

    dispatch(createOrder({ orders: items, date: dateNow }));
    // dispatch(clearBasket());
    history.push('/buyer/history');

    // history.push('/seller/orders');
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
          <>
            {
              basket.products && (
                // basket.map((item) => (
                <>
                  {basket.products.map((item) => (
                    <BusketItem
                      key={item._id}
                      item={item}
                      qtyChangeHandler={qtyChangeHandler}
                      removeHandler={removeFromCartHandler}
                    />
                  ))}
                </>
              )
              // ))
            }
          </>
        )}
      </div>
      <div className={styles.cartscreen__right}>
        <div className={styles.cartscreen__info}>
          <p>Общее количество товаров {getCartCount()} шт.</p>
          <p>₽ {getCartSubTotal()}</p>
        </div>
        <div>
          <button
            onClick={createNewOrder}
            style={{ background: '#283655', fontWeight: 'bold' }}
          >
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  );
}
