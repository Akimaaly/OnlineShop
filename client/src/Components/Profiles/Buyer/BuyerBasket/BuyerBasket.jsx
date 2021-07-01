import styles from './styles.module.css';

import BusketItem from '../BasketItem/BasketItem';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  addToBasket,
  deleteFromBasket,
} from '../../../../Redux/actions/basket.actions';
import { createOrder } from '../../../../Redux/actions/order.actions';
import { useEffect, useState } from 'react';
import api from '../../../../api';

export default function BuyerBasket() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.basket);
  const { products } = cart;
  const [basket, setBasket] = useState([]);

  const fetchBasketAll = async () => {
    const response = await api.getAllBasket();
    setBasket(response);
  };

  useEffect(() => {
    fetchBasketAll();
  }, []);

  //функция удаления товара из корзины
  const removeFromCartHandler = (id) => {
    dispatch(deleteFromBasket(id));
  };

  // функция для подсчета количества товаров в корзине
  const getCartCount = () => {
    return basket?.reduce((qty, item) => Number(item.quantity) + qty, 0);
  };

  //подсчет общего количества денег
  const getCartSubTotal = () => {
    return basket
      .reduce((price, item) => price + item.totalPrice, 0)
      .toFixed(2);
  };

  const createNewOrder = async () => {
    const items = basket[0].products?.map((el) => el._id);
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
    history.push('/seller/orders');
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
            {basket.map((item) => (
              <>
                {item.products.map((item) => (
                  <BusketItem
                    key={item._id}
                    item={item}
                    // qtyChangeHandler={qtyChangeHandler}
                    removeHandler={removeFromCartHandler}
                  />
                ))}
              </>
            ))}
          </>
        )}
      </div>
      <div className={styles.cartscreen__right}>
        <div className={styles.cartscreen__info}>
          <p>Общее количество товаров {getCartCount()} шт.</p>
          <p>{getCartSubTotal()} р.</p>
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
