import styles from './styles.module.css';
export default function OrderItem({ order, changeStatus }) {
  return (
    <div className={styles.cartitem}>
      <h5><span style={{ fontWeight: 'bold' }}>Заказ №  </span>{order._id.slice()}</h5>
      <p><span style={{ fontWeight: 'bold' }}>Дата заказа: </span>{order.date}</p>
      <ul><span style={{ fontWeight: 'bold' }}>Товары в заказе:</span>
        {order.items.map(item => <li>{item.title}</li>)}
      </ul>
      <p><span style={{ fontWeight: 'bold' }}>Статус заказа: </span> {order.status ? <span style={{fontWeight:'bold', color: 'green'}}>Подтвержден</span> : <span style={{fontWeight:'bold', color: 'red'}}>Ждет подтверждения</span>}</p>
    </div>  
  )
}
