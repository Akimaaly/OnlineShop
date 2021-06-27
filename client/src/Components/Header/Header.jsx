import { PageHeader, Button } from 'antd';
import React, { useEffect }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../api';
import { historyServer } from '../../api/server';

function Header2() {
  const history = useHistory();

  async function butHandler() {
    await api.getLogout();
    history.push('/auth');
  }

  useEffect(() => {
    api.getHome();
  }, []);


  useEffect(() => {
    historyServer.listen(({ location, action }) => { // надо проверить возвращение назад()
      history.push(location.pathname);
    });
  }, []);

  return (
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      title="AkimShop"
      subTitle="The best online-shop you ever seen"
      extra={[
        <Link to='/reg'>
          <Button key="3">Reg</Button>
        </Link>,
        <Link to='/auth'>
          <Button key="2">Login</Button>
        </Link>,
        <Link to='/seller/profile'>
        <Button key="3">Личный кабинет</Button>
      </Link>,
        
          <Button key="1" onClick={butHandler}>Logout</Button>
   
      ]}
    >
    </PageHeader>
    </div>
  )
}

export default Header2;
