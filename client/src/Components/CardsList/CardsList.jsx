import CardsItem from "../CardsItem/CardsItem";
import { Link, useParams } from "react-router-dom";
import { Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllGoods } from "../../Redux/actions/goods.actions";
import { useState } from "react";

function CardsList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.goods);
  let currentCategoryName = useParams().id;
console.log(currentCategoryName);
  let currentList = cards.filter((el) => el.category === currentCategoryName); ;
console.log(currentList);
  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);
  console.log(currentList, "currentList");
  return (
    <div>
      <Row gutter={[16, 16]}>
        {currentList.length === 0
          ? cards.map((el) => (
              <Link key={el._id} to={`/goods/${el._id}`}>
                <CardsItem title={el.title} price={el.price} image={el.image} />
              </Link>
            ))
          : currentList.map((el) => (
              <Link key={el._id} to={`/goods/${el._id}`}>
                <CardsItem title={el.title} price={el.price} image={el.image} />
              </Link>
            ))}
      </Row>
    </div>
  );
}

export default CardsList;
