import CardsItem from "../CardsItem/CardsItem";
import { Link } from 'react-router-dom';
import { Row } from 'antd';


function CardsList() {

  return (
    <div>
      <Row gutter={[16, 16]}>
        {cards.map((el) => <Link key={el.id} to={`/goods/${el.id}`}><CardsItem title={el.title} price={el.price} image={el.image} /></Link>)}
      </Row>
    </div>
  );
}

export default CardsList;
