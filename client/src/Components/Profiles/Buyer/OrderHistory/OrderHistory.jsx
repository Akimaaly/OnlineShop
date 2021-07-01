import { useSelector, useDispatch } from 'react-redux';

import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../../../api';
import OrderItem from '../OrderItem/OrderItem'

export default function OrderHistory() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.basket);
  const { products } = cart;
  const [basket, setBasket] = useState([]);

  const fetchBasketAll = async () => {
    const response = await api.getAllBasket();
    setBasket(response);
  };

  const orders = [
    {
      _id: 12, //id в монго
      date: Date.now(),
      items: ['iphone', 'ipad', 'imac', 'ipod'],
      status: true,
    },
    {
      _id: 11,
      date: Date.now(),
      items: ['fruit', 'car'],
      status: false,
    },
  ]

  return (
    <div>
      <h2 style={{marginLeft: '30px'}}> История заказов</h2>
      <ul>
      {orders.length ? (
          orders.map((order) => <OrderItem order={order}/>)
      ): (<p>Ничего нет</p>)}
      </ul>
    </div>
  );
}
