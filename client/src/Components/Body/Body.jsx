import { Layout, Row, Col } from 'antd';
import CategoriesNavBar from '../Categories/CategoriesNavBar';
import CardsList from '../CardsList/CardsList';
import Home from '../Home/Home';

function Body() {
  const { Content, Footer } = Layout;
  return (
    <>
      <div>
        <Layout>
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
          <Footer>
            <Home />
          </Footer>
        </Layout>
      </div>
    </>
  );
}

export default Body;
