import CardsItem from "../CardsItem/CardsItem";
import { Link, useParams } from "react-router-dom";
import { Row, Input, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllGoods } from "../../Redux/actions/goods.actions";
import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { useState } from "react";

const { Search } = Input;

function CardsList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.goods);
  const [visible, setVisible] = useState(false); // visible выпадающего списка сортировки
  const [sortedList, setSortedList] = useState(null);

  let currentCategoryName = useParams().id; // получение имени категории для фильтрации
  let currentList = cards.filter(
    (el) => el.category && el.category === currentCategoryName //отображаемые goods по категориям
  );
  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);

  const handleVisibleChange = () => {
    setVisible((pre) => !pre);
  };
  const handleMenuClick = (e) => {
    setVisible((pre) => !pre);
    sortGoodsDown(e.key);
  };
  const sortGoodsDown = (params) => {
    if (currentCategoryName) {
      setSortedList(
        currentList.sort((a, b) => {
          return a[params] > b[params] ? 1 : -1;
        })
      );
    } else {
      setSortedList(
        cards.sort((a, b) => {
          return a[params] > b[params] ? 1 : -1;
        })
      );
    }
  };
const onSearch = ()=>{

} 

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="category" hidden={!currentCategoryName ? false : true}>
        Категория
      </Menu.Item>
      <Menu.Item key="title">Наименование товара</Menu.Item>
      <Menu.Item key="price">Цена</Menu.Item>
      <Menu.Item key="seller">Продавец</Menu.Item>
    </Menu>
  ); // выпадающий список сортировки по ключам

  return (
    <div style={{ marginTop: '68px', }}>
      <Space  size={[120, 16]} >
      <Dropdown
        overlay={menu}
        onVisibleChange={handleVisibleChange}
        visible={visible}
      >
        <Button
          to="#"
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          style={{ color: "black" }}
        >
          Сортировать <DownOutlined /> 
        </Button>
      </Dropdown>
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
    </Space>
    <br />
      <Row gutter={[16, 16]} style={{ marginTop: '15px' }}>
        {sortedList
          ? sortedList.map(({ _id, title, image, price }) => (
              <Link key={_id} to={`/goods/${_id}`}>
                <CardsItem title={title} price={price} image={image} />
              </Link>
            ))
          : currentList.length > 0
          ? currentList.map(({ _id, title, image, price }) => (
              <Link key={_id} to={`/goods/${_id}`}>
                <CardsItem title={title} price={price} image={image} />
              </Link>
            ))
          : cards.map(({ _id, title, image, price }) => (
              <Link key={_id} to={`/goods/${_id}`}>
                <CardsItem title={title} price={price} image={image} />
              </Link>
            ))}
      </Row>
    </div>
  );
}

export default CardsList;
