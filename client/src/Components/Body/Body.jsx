import { Layout, Row, Col } from 'antd';
import CategoriesNavBar from '../Categories/CategoriesNavBar';
import Header from '../Header/Header';
import CardsList from '../CardsList/CardsList';

function Footer() {
  const { Content, Footer } = Layout;
  return (
    <>
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
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </>
  );
}

export default Footer;
