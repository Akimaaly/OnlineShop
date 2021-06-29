import CardsItem from "../CardsItem/CardsItem";
import { Link, useParams } from "react-router-dom";
import { Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllGoods } from "../../Redux/actions/goods.actions";
import { useContext } from "react";
import { Context } from "../../App";

function CardsList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.goods);
  // const { goodsForShow } = useContext(Context); //state отображаемых goods послее сортировки
  // let currentCategoryName = useParams().id;
  // let currentList = cards.filter(
  //   (el) => el.category && el.category === currentCategoryName //отображаемые goods по категориям
  // );
  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);

  return (
    <div> Hello
      {/* <Row gutter={[16, 16]}>
        {goodsForShow.length > 0
          ? goodsForShow.map(({ _id, title, image, price }) => (
              <Link key={_id} to={`/goods/${_id}`}>
                <CardsItem title={title} price={price} image={image} />
              </Link>
            ))
          : currentList.length === 0
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
      </Row> */}
    </div>
  );
}

export default CardsList;
