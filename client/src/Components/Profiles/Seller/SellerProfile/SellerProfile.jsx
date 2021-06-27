import { Space, Card, Button, Row, Col } from 'antd';
import { Route, Link, Switch } from 'react-router-dom';
import { FormSizeDemo } from '../AddGoodForm/AddGoodForm';
import GoodsForSale from '../GoodsForSale/GoodsForSale';

export default function SellerProfile() {
  return (
    <>
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
      <GoodsForSale/>
    </>
  );
}
