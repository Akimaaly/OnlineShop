import React from 'react';
import Webcam from 'react-webcam';
import { Space, Card, Button, Row, Col, Input, Tooltip } from 'antd';
import ModalEdit from './ModalEdit';
import { EditOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import NavigationProfile from './NavigatonProfile';
import EditProfile from './EditProfile';
import { useState } from 'react';

export default function BuyerProfile() {
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [typeModalData, setTypeModalData] = useState(null);

  const handleOpen = (type) => {
    setTypeModalData(type);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <NavigationProfile />
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
