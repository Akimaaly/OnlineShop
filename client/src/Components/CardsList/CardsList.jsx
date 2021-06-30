import CardsItem from '../CardsItem/CardsItem';
import { Link, useParams } from 'react-router-dom';
import { Row, Input, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getAllGoods } from '../../Redux/actions/goods.actions';
import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { useState } from 'react';

const { Search } = Input;
const { SubMenu } = Menu;

function CardsList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.goods);
  const [visible, setVisible] = useState(false); // visible выпадающего списка сортировки
  const [sortedList, setSortedList] = useState(null);
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue('');
  }, []);

  let currentCategoryName = useParams().name; // получение имени категории для фильтрации
  let currentList = cards.filter(
    (el) => el.category === currentCategoryName // отображаемые goods по категориям
  );

  const prevCategory = useRef(currentCategoryName);

  useEffect(() => {
    if (prevCategory.current !== currentCategoryName) {
      setSortedList(null);
    }
  }, [currentCategoryName]);

  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);

  const handleVisibleChange = () => {
    setVisible((pre) => !pre);
  };
  const handleMenuClick = (e) => {
    setVisible((pre) => !pre);
    if (e.key === '1') {
      // console.log(e.key);
      return sortPriceDown();
    }
    if (e.key === '2') {
      // console.log(e.key);
      return sortPriceUP();
    } else {
      // console.log(e.key);
      return sortGoodsDown(e.key);
    }
  };
  const sortGoodsDown = (params) => {
    // console.log("sortGoodsDown", params);
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
  const sortPriceDown = () => {
    if (currentCategoryName) {
      setSortedList(currentList.sort((a, b) => a.price - b.price));
    } else {
      setSortedList(cards.sort((a, b) => a.price - b.price));
    }
  };
  const sortPriceUP = () => {
    if (currentCategoryName) {
      setSortedList(currentList.sort((a, b) => b.price - a.price));
    } else {
      setSortedList(cards.sort((a, b) => b.price - a.price));
    }
  };

  const searchItems = (e) => {
    setValue(e.target.value);
    setSortedList(null);
  };
  const filteredCards = cards.filter((card) => {
    return (
      card.title.toLowerCase().includes(value.toLowerCase()) ||
      card.longDescription.toLowerCase().includes(value.toLowerCase()) ||
      card.category.toLowerCase().includes(value.toLowerCase()) ||
      card.price.toString().includes(value.toString())
    );
  });
  // console.log(sortedList, 'sortedListsortedList');
  const menu = (
    <Menu onClick={handleMenuClick} style={{ color: 'white' }}>
      {/* <Menu.ItemGroup title="выберите значение сортировки"  > */}
      <Menu.Item key='category' hidden={!currentCategoryName ? false : true}>
        Категория
      </Menu.Item>
      <Menu.Item key='title'>Наименование товара</Menu.Item>
      <SubMenu key='SubMenu' title='Цена'>
        <Menu.Item key='1'>по возрастанию</Menu.Item>
        <Menu.Item key='2'>по убыванию</Menu.Item>
      </SubMenu>
      {/* </Menu.ItemGroup> */}
    </Menu>
  ); // выпадающий список сортировки по ключам

  return (
    <div style={{ marginTop: '68px' }}>
      <Space size={[120, 16]}>
        <Dropdown
          overlay={menu}
          onVisibleChange={handleVisibleChange}
          visible={visible}
        >
          <Button
            to='#'
            className='ant-dropdown-link'
            onClick={(e) => e.preventDefault()}
            style={{
              color: '#fff',
              background: '#283655',
              borderColor: '#283655',
            }}
          >
            Сортировать <DownOutlined />
          </Button>
        </Dropdown>
        <Space>
          <Search
            placeholder='Введите название товара или часть его описания...'
            allowClear
            onChange={searchItems}
            style={{ borderColor: '#283655', width: '500px' }}
          />
        </Space>
      </Space>
      <br />
      <Row gutter={[16, 16]} style={{ marginTop: '5px' }}>
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
          : filteredCards
          ? filteredCards.map(({ _id, title, image, price }) => (
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
