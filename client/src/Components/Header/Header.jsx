import { PageHeader, Button, Layout, Menu } from 'antd';
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
      console.log(response);
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
      {/* <Layout > */}
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          {!user.role && (
            <>
              <Menu.Item key='1'>
                <Link to='/reg'>Регистрация</Link>
              </Menu.Item>
              <Menu.Item key='6'>
                <Link to='/auth'>Войти</Link>
              </Menu.Item>
            </>
          )}

          {user.role === 'seller' && (
            <>
              <Menu.Item key='7'>
                <Link to='/seller/profile'>Личный кабинет</Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Button key='12' onClick={butHandler}>
                  Logout
                </Button>
              </Menu.Item>
            </>
          )}
          {user.role === 'user' && (
            <>
              <Menu.Item key='7'>
                <Link to='/buyer/profile'>Личный кабинет</Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Button key='12' onClick={butHandler}>
                  Logout
                </Button>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>

      {/* </Layout> */}
      <PageHeader
        ghost={false}
        title='AkimShop'
        subTitle='The best online-shop you ever seen'
        extra={[]}
      >
        <p>Вы вошли как: {user.name}</p>
      </PageHeader>
    </div>
  );
}

export default Header2;
