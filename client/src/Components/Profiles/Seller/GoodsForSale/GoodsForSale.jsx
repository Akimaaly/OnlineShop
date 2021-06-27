import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteGood,
  getGoodsOfCurrentSeller,
} from '../../../../Redux/actions/goods.actions';
import GoodItem from '../GoodItem/GoodItem';

export default function GoodsForSale() {
  const goodsOfCurrentSeller = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoodsOfCurrentSeller('60d5e39bd7e8203cfc215d61'));
  }, [dispatch]);

  const deletehandler = (id) => {
    dispatch(deleteGood(id));
  };
  return (
    <div>
      <h2>Ваши товары</h2>
      <>
        {goodsOfCurrentSeller.length === 0 ? (
          <p>У вас пока нет товаров!</p>
        ) : (
          <ul>
            {goodsOfCurrentSeller.map((good) => (
              <GoodItem
                key={good._id}
                {...good}
                deletehandler={deletehandler}
              />
            ))}
          </ul>
        )}
      </>
    </div>
  );
}
