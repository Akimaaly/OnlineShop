import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrdersOfCurrentUser } from '../../../../Redux/actions/order.actions';
import OrderItem from '../OrderItem/OrderItem';

export default function Orders() {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  console.log(orders);
  useEffect(() => {
    dispatch(getOrdersOfCurrentUser());
  }, []);
  return (
    <div>
      <h2 style={{ marginLeft: '30px' }}> Ваши заказы</h2>
      <ul>
        {orders.length ? (
          orders.map((order) => <OrderItem order={{...order}} />)
        ) : (
          <p>Ничего нет</p>
        )}
      </ul>
    </div>
  );
}
