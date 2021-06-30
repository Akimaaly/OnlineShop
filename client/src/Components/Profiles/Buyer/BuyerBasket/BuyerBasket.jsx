import styles from './styles.module.css';

import BusketItem from '../BasketItem/BasketItem';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { addToBasket, deleteFromBasket } from '../../../../Redux/actions/basket.actions';

export default function BuyerBasket () {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.basket);
  const { products } = cart;

  //функция добавления товара в корзину
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToBasket(id, qty));
  };

  //функция удаления товара из корзины
  const removeFromCartHandler = (id) => {
    dispatch(deleteFromBasket(id));
  };

  // функция для подсчета количества товаров в корзине
  const getCartCount = () => {
    return products.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  //подсчет общего количества денег
  const getCartSubTotal = () => {
    return products
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.cartscreen}>
      <div className={styles.cartscreen__left}>
        <h2>Ваша корзина покупок</h2>
        {products.length === 0 ? (
          <div>
            Пока что корзина пуста
            <Link to='/'>На главную</Link>
          </div>
        ) : (
          products.map((item) => (
            <BusketItem
              key={item._id}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className={styles.cartscreen__right}>
        <div className={styles.cartscreen__info}>
          <p>Общее количество товаров ({getCartCount()}) шт.</p>
          <p>{getCartSubTotal()} р.</p>
        </div>
        <div>
          <button>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};


