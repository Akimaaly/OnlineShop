import styles from './styles.module.css'
export default function OrderItem({ order }) {

  return (
    <div className={styles.cartitem}>
      <h5>Заказ № {order._id}</h5>
      <p>Дата заказа: {order.date}</p>
      <ul> Товары в заказе:
        {order.items.map(item => <li>{item.title}</li>)}
      </ul>
      <p>Статус заказа: {order.status ? 'Подтвержден' : 'Ждет подтверждения'}</p>
    </div>  
  )
}
