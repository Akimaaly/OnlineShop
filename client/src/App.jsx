import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CardsList from './Components/CardsList/CardsList';
import 'antd/dist/antd.css';
import CategoriesNavBar from './Components/Categories/CategoriesNavBar';

import CardForm from './Components/CardForm/CardForm';
import Header from './Components/Header/Header';
import Registration from './Components/Registration/Registration';
import SellerProfile from './Components/Profiles/Seller/SellerProfile/SellerProfile';
import Home from './Components/Home/Home';
import Body from './Components/Body/Body';
import AddGoodForm from './Components/Profiles/Seller/AddGoodForm/AddGoodForm';
import './App.css'

import BuyerProfile from './Components/BuyerProfile/BuyerProfile';
import Auth from './Components/Auth/Auth';
// import SortButton from './Components/Buttons/SortButton';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/reg'>
          <Registration />
        </Route>
        <Route exact path='/seller/good/new'>
          <AddGoodForm />
        </Route>
        <Route exact path='/cardlist/:name'>
          <Body />
        </Route>
        <Route exact path='/cardlist'>
          <CardsList />
        </Route>
        <Route exact path='/seller/profile'>
          <SellerProfile />
        </Route>
        <Route exact path='/buyer/profile'>
          <BuyerProfile />
        </Route>
        <Route exact path='/goods/:id'>
          <CardForm />
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
