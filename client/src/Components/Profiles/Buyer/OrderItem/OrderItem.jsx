import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import {
  addToBasket,
  deleteFromBasket,
} from '../../../../Redux/actions/basket.actions';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../../../api';

export default function OrderHistory() {
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
    <div>
      <h2>Это один заказ</h2>
    </div>
  );
}
