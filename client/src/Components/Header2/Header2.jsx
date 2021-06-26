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
        <Link to='/logup'>
          <Button key="3">Logup</Button>
        </Link>,
        <Link to='/login'>
          <Button key="2">Login</Button>
        </Link>,
        <Link to='/reg'>
          <Button key="1">Reg</Button>
        </Link>,
      ]}
    >
    </PageHeader>
    </div>
  )
}

export default Header2;
