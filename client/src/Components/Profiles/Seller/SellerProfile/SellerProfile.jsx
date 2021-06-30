import { Space, Card, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { FormSizeDemo } from '../AddGoodForm/AddGoodForm';
import GoodsForSale from '../GoodsForSale/GoodsForSale';

export default function SellerProfile() {
  const user = useSelector((state) => state.user);

  return (
    <div style={{ paddingTop: '100px' }}>
      {user.name}
      <Row align='middle'>
        <Col span={24}>
          <Space size={21}>
            <Link to='/seller/good/new'>
              <Button type='link'>Добавить товар</Button>
            </Link>
          </Space>
          <hr />
        </Col>
      </Row>
      <GoodsForSale />
    </div>
  );
}
