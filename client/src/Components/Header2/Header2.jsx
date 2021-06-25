import { PageHeader, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Header2() {
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
        <Link to='/logout'>
          <Button key="1">Logout</Button>
        </Link>,
      ]}
    >
    </PageHeader>
    </div>
  )
}

export default Header2;
