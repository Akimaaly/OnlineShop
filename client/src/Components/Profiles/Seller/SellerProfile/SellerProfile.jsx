import { Space, Card, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { FormSizeDemo } from '../AddGoodForm/AddGoodForm';
import GoodsForSale from '../GoodsForSale/GoodsForSale';
import SubNavigation from '../SubNavigation/SubNavigation';
export default function SellerProfile() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {/* {user.name} */}
      <SubNavigation />
    </div>
  );
}
