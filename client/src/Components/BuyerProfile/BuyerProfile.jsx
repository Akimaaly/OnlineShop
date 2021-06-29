import React from 'react';
import Webcam from 'react-webcam';
import { Space, Card, Button, Row, Col, Input, Tooltip } from 'antd';

import { useSelector } from 'react-redux';
import NavigationProfile from './NavigatonProfile';
import EditProfile from './EditProfile';
import { useState } from 'react';

export default function BuyerProfile() {
  const user = useSelector((state) => state.user);
  const [buttonEdit, setButtonEdit] = useState(0);

  console.log(user);

  return (
    <>
      <NavigationProfile />
      <div style={{ padding: '30px', background: '#ececec' }}>
        <Card title={user.name} bordered={false} style={{ width: 300 }}>
          <p>Email:{user.email} </p>
          <p>Телефон:{user.phone} </p>
        </Card>
      </div>
      <button onClick={() => setButtonEdit(1)}>Редактировать профиль</button>
      {buttonEdit === 1 && (
        <EditProfile buttonEdit={buttonEdit} setButtonEdit={setButtonEdit} />
      )}
    </>
  );
}
