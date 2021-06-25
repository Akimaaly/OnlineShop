import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './Components/Header/Header';
// import Sider from "./Components/Sider/Sider";
import CardsList from './Components/CardsList/CardsList';
import 'antd/dist/antd.css';
import CategoriesNavBar from './Components/Categories/CategoriesNavBar';
import Login from './Components/Registration.style/Login';
import Logup from './Components/Registration.style/Logup';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home/Home';
import Body from './Components/Body/Body';
import Auth from './Components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/reg'>
          <Registration />
        </Route>
        <Route exact path='/cardlist:name'>
          <CardsList />
        </Route>
        <Route exact path='/cardlist'>
          <CardsList />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/logup'>
          <Logup />
        </Route>
        <Route exact path='/'>
          <Body />
          <Home />
        </Route>
        <Route exact path='/auth'>
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
