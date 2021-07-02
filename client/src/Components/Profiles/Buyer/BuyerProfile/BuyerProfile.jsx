import React from 'react';
import Webcam from 'react-webcam';
import { Space, Card, Button, Row, Col, Input, Tooltip } from 'antd';
import ModalEdit from '../../../BuyerProfile/ModalEdit';
import {
  EditOutlined,
  InstagramOutlined,
  WechatOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import NavigationProfile from '../Subnavigation/Subnavigation';
import { useState } from 'react';
import styles from './styles.module.css';
import Avatar from './Avatar';
import Contact from './Contact';

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
              <div
                className='container-info'
                style={{ display: 'flex', justifyContent: 'flex-start' }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    minWidth: '70px',
                    marginRight: '10px',
                  }}
                >
                  Логин:
                </span>
                <span>{user.name}</span>
              </div>
              <div>
                <EditOutlined
                  style={{ fontSize: '18px' }}
                  onClick={() => handleOpen('name')}
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div
                className='container-info'
                style={{ display: 'flex', justifyContent: 'flex-start' }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    minWidth: '70px',
                    marginRight: '10px',
                  }}
                >
                  Email:
                </span>
                <span>{user.email}</span>
              </div>
              <span></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div
                className='container-info'
                style={{ display: 'flex', justifyContent: 'flex-start' }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    minWidth: '70px',
                    marginRight: '10px',
                  }}
                >
                  Телефон:
                </span>
                <span>{user.phone}</span>
              </div>
              <div>
                <EditOutlined
                  style={{ fontSize: '18px' }}
                  onClick={() => handleOpen('phone')}
                />
              </div>
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
              <p className='buyoutPrice'>Сумма выкупа: 0 рублей </p>
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
              <span>
                Сохраненный адрес:
                <br />
                Москва, ул.Большая Ордынка, 64{' '}
              </span>
            </div>
          </Card>
        </div>
        <div className={styles.profileCardsUser}>
          <Card
            bordered={false}
            title={'Обратная связь:'}
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
              <InstagramOutlined style={{ fontSize: '42px' }} />
              <WechatOutlined style={{ fontSize: '42px' }} />
              <TwitterOutlined style={{ fontSize: '42px' }} />
              <YoutubeOutlined style={{ fontSize: '42px' }} />
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
