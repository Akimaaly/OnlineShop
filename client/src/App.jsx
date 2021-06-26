import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardsList from './Components/CardsList/CardsList';
import 'antd/dist/antd.css';
import Login from './Components/Registration.style/Login';
import Logup from './Components/Registration.style/Logup';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home/Home';
import Body from './Components/Body/Body';
import CardForm from "./Components/CardForm/CardForm";


function App() {
  return (
    <BrowserRouter>
    <Login/>
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
        <Route path="/cardform">
        <CardForm />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
