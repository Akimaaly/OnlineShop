import CardsItem from "../CardsItem/CardsItem";
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllGoods } from '../../Redux/actions/goods.actions';

function CardsList() {
  const cards = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {cards.map((el) => <Link key={el._id} to={`/goods/${el._id}`}><CardsItem title={el.title} price={el.price} image={el.image} /></Link>)}
      </Row>
    </div>
  );
}

export default CardsList;
