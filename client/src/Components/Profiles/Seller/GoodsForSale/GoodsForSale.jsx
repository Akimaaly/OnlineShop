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
  const seller = useSelector((state) => state.user);
  // console.log(seller.id);

  useEffect(() => {
    if (seller.id) {
      dispatch(getGoodsOfCurrentSeller(`${seller.id}`));
    }
  }, [seller]);

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
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              margin: '-10px',
            }}
          >
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
