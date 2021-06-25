import { Layout, Row, Col } from "antd";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
// import Sider from "./Components/Sider/Sider";
import CardsList from "./Components/CardsList/CardsList";
import "antd/dist/antd.css";
import CategoriesNavBar from "./Components/Categories/CategoriesNavBar";
import Login from './Components/Registration.style/Login'
import Logup from './Components/Registration.style/Logup'
import CardForm from "./Components/CardForm/CardForm";

const { Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <div>
          <Header />
        {/* <Layout>
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
          <Footer>Footer
          <CardForm />
          </Footer>
        </Layout> */}
      </div>
      <Switch>
      <Route path="/cardlist:name">
        <CardsList />
      </Route>
      <Route path="/cardlist">
        <CardsList />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/logup">
        <Logup />
      </Route>
      <Route path="/logup">
        <Logup />
      </Route>
      <Route path="/cardform">
        <CardForm />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
