import CardsItem from "../CardsItem/CardsItem";
import { Link, useParams } from "react-router-dom";
import { Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllGoods } from "../../Redux/actions/goods.actions";

function CardsList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.goods);
  let currentCategoryName = useParams().id;
  let currentList = cards.filter(
    (el) => el.category && el.category === currentCategoryName
  );
  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);
  return (
    <div>
      <Row gutter={[16, 16]}>
        {currentList.length === 0
          ? cards.map(({ _id, title, image, price }) => (
              <Link key={_id} to={`/goods/${_id}`}>
                <CardsItem title={title} price={price} image={image} />
              </Link>
            ))
          : currentList.map(({ _id, title, image, price }) => (
              <Link key={_id} to={`/goods/${_id}`}>
                <CardsItem title={title} price={price} image={image} />
              </Link>
            ))}
      </Row>
    </div>
  );
}

export default CardsList;
