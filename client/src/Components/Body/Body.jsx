import { Layout, Row, Col } from 'antd';
import CategoriesNavBar from '../Categories/CategoriesNavBar';
import CardsList from '../CardsList/CardsList';
import Search from '../Search/Search';


function Body() {
  const { Content } = Layout;
  return (
    <>
      <div>
        <Layout
        style={{
          background: 'white',
        }}>
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
      </div>
    </>
  );
}

export default Body;
