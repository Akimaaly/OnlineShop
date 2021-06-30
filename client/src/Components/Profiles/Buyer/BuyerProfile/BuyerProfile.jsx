import React from 'react';
import Webcam from 'react-webcam';
import { Space, Card, Button, Row, Col, Input, Tooltip } from 'antd';
import ModalEdit from './ModalEdit';
import { EditOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import NavigationProfile from '../Subnavigation/Subnavigation';
import EditProfile from '../EditProfile/EditProfile';
import { useState } from 'react';

export default function BuyerProfile() {
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [typeModalData, setTypeModalData] = useState(null);

<<<<<<< HEAD:client/src/Components/Profiles/Buyer/BuyerProfile/BuyerProfile.jsx
  // console.log(user);
=======
  const handleOpen = (type) => {
    setTypeModalData(type);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
>>>>>>> 7c07572b3c3162a4e68a68c3196d65409d2d863c:client/src/Components/BuyerProfile/BuyerProfile.jsx

  return (
    <>
      <NavigationProfile />
<<<<<<< HEAD:client/src/Components/Profiles/Buyer/BuyerProfile/BuyerProfile.jsx
      {console.log(user)}
      <div style={{ padding: '30px', background: '#ececec' }}>
        <Card title={user.name} bordered={false} style={{ width: 300 }}>
          <p>Email:{user.email} </p>
          <p>Телефон:{user.phone} </p>
=======
      <div
        style={{
          marginTop: '60px',
          marginLeft: '90px',
          background: 'white',
          border: '1px solid black',
          width: '400px',
          height: '200px',
        }}
      >
        <Card title={'Профиль'} type bordered={false} style={{ width: 300 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <span>Логин:</span>
            <span>{user.name}</span>
            <span>
              <EditOutlined
                style={{ backgroundColor: 'black' }}
                onClick={() => handleOpen('name')}
              />
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Email:</span>
            <span>{user.email}</span>
            <span></span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Телефон:</span>
            <span>{user.phone}</span>
            <span>
              <EditOutlined
                style={{ backgroundColor: 'black' }}
                onClick={() => handleOpen('phone')}
              />
            </span>
          </div>
>>>>>>> 7c07572b3c3162a4e68a68c3196d65409d2d863c:client/src/Components/BuyerProfile/BuyerProfile.jsx
        </Card>
      </div>
      <ModalEdit
        visible={open}
        type={typeModalData}
        handleCancel={handleCancel}
        user={user}
      />
    </>
  );
}
