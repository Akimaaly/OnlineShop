import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import {
  addToBasket,
  deleteFromBasket,
} from '../../../../Redux/actions/basket.actions';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../../../api';
import styles from './styles.module.css';


export default function OrderItem({order}) {
  const dispatch = useDispatch();
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

  return (
    <div className={styles.cartitem}>
      <h5>Заказ № {order._id}</h5>
      <p>Дата заказа: {order.date}</p>
      <ul> Товары в заказе:
        {order.items.map(item => <li>{item}</li>)}
      </ul>
      <p>Статус заказа: {order.status ? 'Подтвержден' : 'Ждет подтверждения'}</p>
    </div>
  );
}
