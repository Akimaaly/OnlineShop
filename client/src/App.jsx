import { Layout, Row, Col } from "antd";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sider from "./Components/Sider/Sider";
import CardsList from "./Components/CardsList/CardsList";
import "antd/dist/antd.css";
import CategoriesNavBar from "./Components/Categories/CategoriesNavBar";

const { Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Header />
          <Layout>
            <Row>
              <Col flex="300px">
                <CategoriesNavBar />
              </Col>
              <Col flex="auto">
                <Content>
                  <CardsList />
                </Content>
              </Col>
            </Row>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <Switch>
      <Route path="/cardlist:name">
        <CardsList />
      </Route>
      <Route path="/cardlist">
        <CardsList />
      </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
