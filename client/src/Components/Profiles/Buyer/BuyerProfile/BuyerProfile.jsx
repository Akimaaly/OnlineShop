import React from 'react';
import Webcam from 'react-webcam';
import { Space, Card, Button, Row, Col, Input, Tooltip } from 'antd';
import ModalEdit from '../../../BuyerProfile/ModalEdit';
import { EditOutlined, PercentageOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import NavigationProfile from '../Subnavigation/Subnavigation';
import { useState } from 'react';
import styles from './styles.module.css';
import Avatar from './Avatar';

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
    <div>
      <NavigationProfile />
      <div className='avatar'></div>
      <div className={styles.wrapperProfileCardsUser}>
        <div className={styles.profileCardsUser}>
          <Card
            title={'Профиль:'}
            type
            bordered={false}
            style={{ backgroundColor: '#4d648d', color: 'white' }}
          >
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
                <EditOutlined onClick={() => handleOpen('name')} />
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
                <EditOutlined onClick={() => handleOpen('phone')} />
              </span>
            </div>
          </Card>
        </div>
        {/* ////////////////////////// карточка скидки */}
        <div className={styles.profileCardsUser}>
          <Card
            bordered={false}
            title={'Ваша скидка:'}
            type
            bordered={false}
            style={{ backgroundColor: '#4d648d', color: 'white' }}
            className='profileCardsUserDescription'
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
              }}
            >
              <div className='circle'>
                <h5>12%</h5>
              </div>
              <p className='buyoutPrice'>Сумма выкупа: </p>
            </div>
          </Card>
        </div>
        <div className={styles.profileCardsUser}>
          <Card
            bordered={false}
            title={'Адреса доставки:'}
            type
            bordered={false}
            style={{ backgroundColor: '#4d648d', color: 'white' }}
            className='profileCardsUserDescription'
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span>Сохраненный адрес: </span>
            </div>
          </Card>
        </div>
        <div className={styles.profileCardsUser}>
          <Card
            bordered={false}
            title={'Ваша скидка:'}
            type
            bordered={false}
            style={{ backgroundColor: '#4d648d', color: 'white' }}
            className='profileCardsUserDescription'
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span>Сумма выкупа: </span>
            </div>
          </Card>
        </div>

        <ModalEdit
          visible={open}
          type={typeModalData}
          handleCancel={handleCancel}
          user={user}
        />
      </div>
    </div>
  );
}
