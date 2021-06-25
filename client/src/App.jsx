import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardsList from './Components/CardsList/CardsList';
import 'antd/dist/antd.css';
import Login from './Components/Registration.style/Login';
import Logup from './Components/Registration.style/Logup';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home/Home';
import Body from './Components/Body/Body';
import Header2 from './Components/Header2/Header2';


function App() {
  return (
    <BrowserRouter>
      <Header2 />
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
        {/* <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/logup'>
          <Logup />
        </Route> */}
        <Route exact path='/'>
          <Body />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
