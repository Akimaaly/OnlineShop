import { } from 'antd';

const { Meta } = Card;

function CardsItem({title, description, image }) {

  return (
    <Col>
        <Card
          hoverable
          style={{ width: 240, borderRadius: "20px"}}
          cover={<img style={{height: 360, borderRadius: "20px 20px 0px 0px"}} alt="example" src={image} />}
        >
          <Meta title={title} description={description} />
        </Card>
      </Col>
  );
}

export default CardsItem;
