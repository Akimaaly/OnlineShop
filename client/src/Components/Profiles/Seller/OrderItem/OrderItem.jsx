import styles from './styles.module.css';
export default function OrderItem({ order, changeStatus }) {
  return (
    <div className={styles.cartitem}>
      <h5>Заказ № {order._id}</h5>
      <p>Дата заказа: {order.date}</p>
      <ul>
        {' '}
        Товары в заказе:
        {order?.items?.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      <p>
        Статус заказа:{' '}
        <button onClick={() => changeStatus(order._id)}>
          {order.status ? 'Подтвердить' : 'Убрать подтверждение'}
        </button>
      </p>
    </div>
  );
}
