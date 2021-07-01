import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import api from '../../api';
import { historyServer } from '../../api/server';
import { deleteUserInfo, getUserInfo } from '../../Redux/actions/user.action';

const { Header } = Layout;

function Header2() {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.basket);
  // console.log(cart);
  const dispatch = useDispatch();

  async function butHandler() {
    try {
      await api.getLogout();
      dispatch(deleteUserInfo());
      history.push('/');
    } catch (error) {}
  }

  async function getUser() {
    try {
      const response = await api.getHome();
      dispatch(getUserInfo(response));
    } catch (error) {}
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    historyServer.listen(({ location, action }) => {
      // надо проверить возвращение назад()
      history.push(location.pathname);
    });
  }, []);

  return (
    <div className='site-page-header-ghost-wrapper'>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1,
          width: '100%',
          height: '70px',
          padding: 0,
          background: '#283655',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
            <Link to='/'>
              <span style={{ fontSize: '36px', color: 'white'}}>
                Akim Express
              </span>
            </Link>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{ height: '70px', background: '#283655', minWidth: '700px', display: 'flex', justifyContent: 'flex-end'}}
        >
          {!user.role && (
            <>
              <Menu.Item key='1'>
                <Link to='/reg'>
                  <span style={{ fontSize: '18px', color: 'white' }}>
                    Регистрация
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key='6'>
                <Link to='/auth'>
                  <span style={{ fontSize: '18px', color: 'white' }}>
                    Войти
                  </span>
                </Link>
              </Menu.Item>
            </>
          )}

          {user.role === 'seller' && (
            <>
              <Menu.Item key='32'>
                <p style={{ fontSize: '18px', color: 'white' }}>
                  Вы вошли как продавец: {user.name}
                </p>
              </Menu.Item>
              <Menu.Item key='71'>
                <Link to='/seller/profile'>
                  <span style={{ fontSize: '18px', color: 'white' }}>
                    Личный кабинет
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key='21' onClick={butHandler}>
                <span style={{ fontSize: '18px', color: 'white' }}>Выход</span>
              </Menu.Item>
            </>
          )}
          {user.role === 'user' && (
            <>
              <Menu.Item key='256'>
                <Badge count={cart.products?.length} overflowCount={5} size="default">
                  <Link to='/buyer/basket'>
                    <ShoppingCartOutlined style={{ fontSize: '32px' }}/>
                  </Link>
                </Badge>
              </Menu.Item>
              <Menu.Item key='333'>
                <p style={{ fontSize: '18px', color: 'white' }}>
                  Привет, {user.name}!
                </p>
              </Menu.Item>
              <Menu.Item key='7'>
                <Link to='/buyer/profile'>
                  <span style={{ fontSize: '18px', color: 'white' }}>
                    Личный кабинет
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key='2' onClick={butHandler}>
                <span style={{ fontSize: '18px', color: 'white' }}>Выход</span>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>
    </div>
  );
}

export default Header2;
