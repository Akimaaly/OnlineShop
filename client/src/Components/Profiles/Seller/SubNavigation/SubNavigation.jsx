import { Space, Typography, Divider, Card, Button, Row, Col } from 'antd';
import { Route, Link, Switch } from 'react-router-dom';
import styles from './styles.module.css';
import {
  ShoppingOutlined,
  PlusOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';

export default function SubNavigation() {
  return (
    <Row align='middle' className={styles.navdiv}>
      <Col span={24}>
        <Space className={styles.navdiv} split={<Divider type='vertical' />}>
          <Space size={21}>
            <HomeOutlined className={styles.icons} />
            <Typography.Link>
              <Link to='/'>Главная</Link>
            </Typography.Link>
            |
            <PlusOutlined className={styles.icons} />
            <Typography.Link>
              <Link to='/seller/good/new'>Добавить товар</Link>
            </Typography.Link>
            |
            <ShoppingOutlined className={styles.icons} />
            <Typography.Link>
              <Link to='/seller/goods'>Мои товары</Link>
            </Typography.Link>
            |
            <UserOutlined className={styles.icons} />
            <Typography.Link>
              <Link to='/seller/info'>Обо мне</Link>
            </Typography.Link>
            |
            <Typography.Link>
              <Link to='/seller/orders'>Мои заказы</Link>
            </Typography.Link>
          </Space>
        </Space>
      </Col>
    </Row>
  );
}

//
//       <Link to='/'>Главная</Link>|
//       <Link to='/seller/good/new'>Добавить товар</Link>|
//       <Link to='/seller/goods'>
//           <ShoppingOutlined />
//           Мои товары
//       </Link>
//       |
//
