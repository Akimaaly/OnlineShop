import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { addToBasket } from '../../Redux/actions/basket.actions';

import styles from './style.module.css';

export default function CardForm() {
  const goods = useSelector((state) => state.goods);
  const currentItemID = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [qty, setQty] = useState(1);
  const currentItem = goods.find((el) => el._id === currentItemID.id);

  const addToCartHandler = async () => {
    // on Loader
    try {
      dispatch(addToBasket(currentItem._id, qty)).then(() =>
        history.push('/buyer/basket')
      );
      // history.push('/buyer/basket');
    } catch (error) {}
    //off Loader
  };

  return (
    <div className={styles.productscreen}>
      <>
        <div className={styles.productscreen__left}>
          <div className={styles.left__image}>
            <img height='80%' src={currentItem.image} alt={currentItem.title} />
          </div>

          <div className={styles.left__info}>
            <p className={styles.left__name}>{currentItem.title}</p>
            <p>Цена: {currentItem.price} р.</p>
            <p>{currentItem.longDescription}</p>
          </div>
        </div>
        <div className={styles.productscreen__right}>
          <div className={styles.right__info}>
            <p>
              Цена: <span>{currentItem.price}р.</span>
            </p>
            <p>
              Статус:{' '}
              <span>
                {currentItem.quantity > 0 ? 'В наличии' : 'Нет в наличии'}
              </span>
            </p>
            <p>
              Количество: {currentItem.quantity} шт.
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(currentItem.quantity).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </p>
            <p>
              <button className={styles.formBtn} type='button' onClick={addToCartHandler}>
                Добавить в корзину
              </button>
            </p>
          </div>
        </div>
      </>
    </div>
  );
}
