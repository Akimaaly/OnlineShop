import { PageHeader, Button, Layout, Menu } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import api from '../../api';
import { historyServer } from '../../api/server';
import { deleteUserInfo, getUserInfo } from '../../Redux/actions/user.action';
import styles from './Header.modules.css';

const { Header } = Layout;

function Header2() {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  console.log(user.name);
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
          zIndex: 1,
          width: '120%',
          height: '70px',
          background: "#283655"
        }}

      >
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']} style={{ height: '70px', marginLeft: '-50px', background: '#283655' }}>
          <Menu.Item key='34'>
            <Link to='/'>
              <span style={{ fontSize: '36px', color: 'white' }}>Akim Express</span>
            </Link>
          </Menu.Item>
          {!user.role && (
            <>
              <Menu.Item key='1'>
                <Link to='/reg'><span style={{ fontSize: '18px', color: 'white' }}>Регистрация</span></Link>
              </Menu.Item>
              <Menu.Item key='6'>
                <Link to='/auth'><span style={{ fontSize: '18px', color: 'white' }}>Войти</span></Link>
              </Menu.Item>
            </>
          )}
          {user.role && (
            <>
              <Menu.Item key='32'>
                <p style={{ fontSize: '18px', color: 'white' }}>Вы вошли как: {user.name}</p>
              </Menu.Item>
              <Menu.Item key='7'>
                <Link to='/seller/profile'><span style={{ fontSize: '18px', color: 'white' }}>Личный кабинет</span></Link>
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
