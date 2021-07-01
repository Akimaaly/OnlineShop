import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../OrderItem/OrderItem';

export default function Orders() {
  const orders = useSelector((state) => state.orders);
  useEffect(() => {
    orders;
  }, []);
  return (
    <>
      <h3>Ваши заказы</h3>
      <ul>
        {orders.map((el) => (
          <OrderItem el={el} />
        ))}
      </ul>
    </>
  );
}
