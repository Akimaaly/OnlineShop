import { Breadcrumb } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

function NavigationProfile() {
  return (
    <Breadcrumb style={{ paddingTop: '100px' }}>
      <Breadcrumb.Item>
        <Link to='/'>
          <HomeOutlined />
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <UserOutlined />
        <Link to='/buyer/profile'>
          <span>Профиль</span>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to='/buyer/basket'>
          <ShoppingCartOutlined />
          <span>Корзина</span>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to='/buyer/history'>
          <ShoppingOutlined />
          <span>История покупок</span>
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default NavigationProfile;
