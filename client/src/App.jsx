import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CardsList from './Components/CardsList/CardsList';
import 'antd/dist/antd.css';
import CategoriesNavBar from './Components/Categories/CategoriesNavBar';

import CardForm from './Components/CardForm/CardForm.jsx';
import Header from './Components/Header/Header';
import Registration from './Components/Registration/Registration';
import SellerProfile from './Components/Profiles/Seller/SellerProfile/SellerProfile';
import Home from './Components/Home/Home';
import Body from './Components/Body/Body';
import AddGoodForm from './Components/Profiles/Seller/AddGoodForm/AddGoodForm';
import GoodsForSale from './Components/Profiles/Seller/GoodsForSale/GoodsForSale';
import Info from './Components/Profiles/Seller/Info/Info';
import SubNavigation from './Components/Profiles/Seller/SubNavigation/SubNavigation';
import BuyerBasket from './Components/Profiles/Buyer/BuyerBasket/BuyerBasket';
import './App.css';

import BuyerProfile from './Components/Profiles/Buyer/BuyerProfile/BuyerProfile';
import Auth from './Components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container--main">
      <Switch>
        <Route exact path='/reg'>
          <Registration />
        </Route>
        <Route exact path='/seller/profile'>
          <SellerProfile />
        </Route>
        <Route exact path='/seller/good/new'>
          <SubNavigation />
          <AddGoodForm />
        </Route>
        <Route exact path='/seller/goods'>
          <SubNavigation />
          <GoodsForSale />
        </Route>
        <Route exact path='/seller/info'>
          <SubNavigation />
          <Info />
        </Route>
        <Route exact path='/cardlist/:name'>
          <Body />
        </Route>
        <Route exact path='/cardlist'>
          <CardsList />
        </Route>
        <Route exact path='/buyer/profile'>
          <BuyerProfile />
        </Route>
        <Route exact path='/buyer/basket'>
          <BuyerBasket />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
