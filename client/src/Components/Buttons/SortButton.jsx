import React, { useContext } from "react";
import { Menu, Dropdown, Space } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Context } from "../../App";
// import { useHistory } from "react-router-dom";

const SortButton = () => {
  // const history = useHistory();
  const goods = useSelector((state) => state.goods);
  const { setGoodsForShow } = useContext(Context);
  const [fieldForSort, setFieldForSort] = useState(true);
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="category">Категория</Menu.Item>
      <Menu.Item key="title">Наименование товара</Menu.Item>
      <Menu.Item key="price">Цена</Menu.Item>
      <Menu.Item key="seller">Продавец</Menu.Item>
    </Menu>
  );
  const sortGoods = (params) => {
    let copyGoods = goods.concat();
    const sort = copyGoods.sort((a, b) => {
      return a[params] > b[params] ? 1 : -1;
    });
    setGoodsForShow(sort);
    // history.push("/cardlist");
  };

  function handleMenuClick(e) {
    setFieldForSort(e.key);
  }
  function handleSort() {
    sortGoods(fieldForSort);
  }

  return (
    <Space wrap>
      <Dropdown.Button onClick={handleSort} overlay={menu}>
        Сортировать
      </Dropdown.Button>
    </Space>
  );
};

export default SortButton;
