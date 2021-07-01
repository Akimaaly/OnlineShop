import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default function BasketItem({ item: itemInBasket, qtyChangeHandler, removeHandler }) {
  const {qty, good: item} = itemInBasket;
  return (
    <div className={styles.cartitem}>
      <div className={styles.cartitem__image}>
        <img className={styles.image} src={item.image} alt={item.title} />
      </div>

      <Link to={`/goods/${item._id}`} className={styles.cartitem__name}>
        <p>{item.title}</p>
      </Link>

      <p className={styles.cartitem__price}>₽ {item.price}</p>

      <select
        onChange={(e) => qtyChangeHandler(item._id, e.target.value)}
        className={styles.cartItem__select}
      >
        {Array.from(Array(Number(item.quantity)).keys()).map((x) => (
          <option key={x + 1} value={x + 1} selected={x + 1 === Number(qty)}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className={styles.cartitem__deleteBtn}
        onClick={() => removeHandler(item._id)}
      >
      </button>
    </div>
  );
}
