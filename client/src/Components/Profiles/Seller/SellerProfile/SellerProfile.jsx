import { Space, Card, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { FormSizeDemo } from '../AddGoodForm/AddGoodForm';
import GoodsForSale from '../GoodsForSale/GoodsForSale';
import SellerNavigation from '../SellerNavigation/SellerNavigation';
import { EditOutlined, PercentageOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

export default function SellerProfile() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <SellerNavigation />
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
                justifyContent: 'flex-start',
                width: '100%',
              }}
            >
              <span className='salerProfile-info-key'>Логин:</span>
              <span>{user.name}</span>
              <span>
                <EditOutlined
                  style={{ fontSize: '18px' }}
                  onClick={() => handleOpen('name')}
                />
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <span className='salerProfile-info-key'>Email:</span>
              <span>{user.email}</span>
              <span></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <span className='salerProfile-info-key'>Телефон:</span>
              <span>{user.phone}</span>
              <span>
                <EditOutlined
                  style={{ fontSize: '18px' }}
                  onClick={() => handleOpen('phone')}
                />
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <span className='salerProfile-info-key'>
                Наименование организации:
              </span>
              <span>ОАО "Береке"</span>
              <span></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <span className='salerProfile-info-key'>
                Генеральный директор:
              </span>
              <span>Аманкулов Акимаалы Талантбекович</span>
              <span></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <span className='salerProfile-info-key'>ИНН:</span>
              <span>2310444949</span>
              <span></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <span className='salerProfile-info-key'>Юридический адрес:</span>
              <span>Москва, ул.Большая Ордынка, 64</span>
              <span></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <span className='salerProfile-info-key'>
                Вид&nbsp;деятельности:
              </span>
              <span>
                47.91.2 - Торговля розничная, осуществляемая непосредственно при
                помощи информационно-коммуникационной сети Интернет
              </span>
              <span></span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
