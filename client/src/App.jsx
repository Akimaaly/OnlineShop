import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CardsList from "./Components/CardsList/CardsList";
import "antd/dist/antd.css";
import CategoriesNavBar from "./Components/Categories/CategoriesNavBar";
import Login from "./Components/Registration.style/Login";
import Logup from "./Components/Registration.style/Logup";
import CardForm from "./Components/CardForm/CardForm";
import Header from "./Components/Header/Header";
import Registration from "./Components/Registration/Registration";
import SellerProfile from "./Components/Profiles/Seller/SellerProfile/SellerProfile";
import Home from "./Components/Home/Home";
import Body from "./Components/Body/Body";
import AddGoodForm from "./Components/Profiles/Seller/AddGoodForm/AddGoodForm";

import Auth from "./Components/Auth/Auth";
import SortButton from "./Components/Buttons/SortButton";
import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

function App() {
  const [goodsForShow, setGoodsForShow] = useState([]); //state/Context отображаемых goods послее сортировки
  return (
    <BrowserRouter>
      <Context.Provider value={{ goodsForShow, setGoodsForShow }}>
        <Header />
        <Switch>
          <Route exact path="/reg">
            <Registration />
          </Route>
          <Route exact path="/seller/good/new">
            <AddGoodForm />
          </Route>
          <Route exact path="/cardlist/:id">
            <CardsList />
          </Route>
          <Route exact path="/cardlist">
            <CardsList />
          </Route>
          <Route exact path="/seller/profile">
            <SellerProfile />
          </Route>
          <Route exact path="/goods/:id">
            <CardForm />
          </Route>
          {/* <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/logup'>
          <Logup />
        </Route> */}
          <Route exact path="/">
            <div style={{ paddingTop: '80px' }}>
              <Body />
            </div>
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
