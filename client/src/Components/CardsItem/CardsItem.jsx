import { Card, Col } from 'antd';

const { Meta } = Card;

function CardsItem({title, description, image, id}) {

  return (
    <Col span={6} key={id}>
        <Card
          hoverable
        style={{ width: 240}}
          cover={<img style={{height: 360}} alt="example" src={image} />}
        >
          <Meta title={title} description={description} />
        </Card>
      </Col>
  );
}

export default CardsItem;
