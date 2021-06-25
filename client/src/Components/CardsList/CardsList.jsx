import CardsItem from "../CardsItem/CardsItem";
import { Row } from 'antd';


function CardsList() {

  const cards = [
    { title: '123', description: '123456', id: 'a1', image: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
    { title: '456', description: '111111', id: 'a2', image: 'https://images.unsplash.com/photo-1612351641432-20a0f196086c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80' },
    { title: '789', description: '2222222', id: 'a3', image: 'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
    { title: '789', description: '2222222', id: 'a4', image: 'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
    { title: '789', description: '2222222', id: 'a5', image: 'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
    { title: '789', description: '2222222', id: 'a6', image: 'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
    { title: '789', description: '2222222', id: 'a7', image: 'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
    { title: '789', description: '2222222', id: 'a8', image: 'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
]

  return (
    <div>
      <Row gutter={[16, 16]}>
        {cards.map((el) => <div key={el.id}><CardsItem title={el.title} description={el.description} image={el.image} /></div>)}
      </Row>
    </div>
  );
}

export default CardsList;
