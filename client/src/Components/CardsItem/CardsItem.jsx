import { Card, Col } from "antd";
import {
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function CardsItem({ title, price, image }) {
  return (
    <Col >
      <Card 
        hoverable
        style={{ width: 180, borderRadius: '20px', border: '1px solid #283655' }}
        cover={
          <img
            style={{ height: 240, borderRadius: '20px 20px 0px 0px', padding: '0px', }}
            alt="example"
            src={image}
          />
        }
          actions={[
            <ShoppingCartOutlined key='addToCard'/>
          ]}
      >
        <Meta title={title} description={`${price} руб.`} />
      </Card>
    </Col>
  );
}

export default CardsItem;
