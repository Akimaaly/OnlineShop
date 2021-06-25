import { Layout, Row, Col } from 'antd';
import Header from './Components/Header/Header';
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
          <Row gutter={[16, 16]}>
            <Col span={4}>
              <CategoriesNavBar />
            </Col>
            <Col span={18}>
              <Content>
                <CardsList />
              </Content>
            </Col>
          </Row>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Elbrus Design ©2021 Created by Bears</Footer>
      </Layout>
    </div>
  );
}

export default App;
