import { Layout, Row, Col } from 'antd';
import Header from './Components/Header/Header';
import Sider from './Components/Sider/Sider';
import CardsList from './Components/CardsList/CardsList';
import 'antd/dist/antd.css';
import CategoriesNavBar from './Components/Categories/CategoriesNavBar';

const { Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Layout>
          <Row>
            <Col flex='300px'>
              <CategoriesNavBar />
            </Col>
            <Col flex='auto'>
              <Content>
                <CardsList />
              </Content>
            </Col>
          </Row>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
