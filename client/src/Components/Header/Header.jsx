import { PageHeader } from 'antd';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../api';
import { historyServer } from '../../api/server';

function Header() {
  const history = useHistory();

  // async function butHandler() {
  //   // Cookie.remove("key");
  //   await api.getLogout();
  //   history.push('/login');
  // }

  // useEffect(() => {
  //   api.getHome();
  // }, []);

  // useEffect(() => {
  //   historyServer.listen(({ location, action }) => {
  //     history.push(location.pathname);
  //   });
  // }, []);

  return (
    <div>
      <div className='d-flex justify-content-evenly'>
        <Link to='/'>Home</Link>
        <Link to='/logup'>Logup</Link>
        <Link to='/login'>Login</Link>
        <Link to='/reg'>Reg</Link>
        {/* <button onClick={butHandler}>Logout</button> */}
      </div>

      <PageHeader
        className='site-page-header'
        title='AKIM EXPRESS'
        subTitle='WELCOME TO AKIM EXPRESS!!!'
      />
    </div>
  );
}

export default Header;
