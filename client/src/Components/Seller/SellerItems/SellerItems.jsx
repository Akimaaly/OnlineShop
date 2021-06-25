import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SellerItem from '../SellerItem/SellerItem';

import { getGoods, deleteGood } from '../../../redux/actions/good';

const style = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

const SellerItems = () => {
  const { values: goods, error, loading } = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  const deleteItem = (id) => {
    console.log('deleteItem==>>>', id);
    dispatch(deleteGood(id));
  };

  if (loading)
    return (
      <div>
        <h2>Your Items</h2>
        <p>Loading...</p>
      </div>
    );

  if (error) {
    return (
      <div>
        <h2>Your Items</h2>
        <p>Error...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Items</h2>
      <>
        {goods.length === 0 ? (
          <p>You have no Items yet!</p>
        ) : (
          <ul style={style.ul}>
            {goods.map((good) => (
              <SellerItem onDelete={deleteItem} key={good._id} {...good} />
            ))}
          </ul>
        )}
      </>
    </div>
  );
};

export default SellerItems;
