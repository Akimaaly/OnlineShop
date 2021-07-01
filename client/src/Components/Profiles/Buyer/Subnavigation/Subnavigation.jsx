import { Space, Typography, Divider, Card, Button, Row, Col } from 'antd';
import { Route, Link, Switch } from 'react-router-dom';
import styles from './styles.module.css';
import {
  ShoppingOutlined,
  PlusOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { black } from 'color-name';

function NavigationProfile() {
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
            <Typography.Link>
              <Link to='/buyer/profile'>Профиль</Link>
            </Typography.Link>
            <PlusOutlined className={styles.icons} />|
            <Typography.Link>
              <Link to='/buyer/basket'>Корзина товаров</Link>
            </Typography.Link>
            <ShoppingOutlined className={styles.icons} />|
            <Typography.Link>
              <Link to='/buyer/history'>История покупок</Link>
            </Typography.Link>
            <UserOutlined className={styles.icons} />
          </Space>
        </Space>
      </Col>
    </Row>
  );
}

export default NavigationProfile;
