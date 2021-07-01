import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initState from './initState';
import rootReducer from './reducers.js/root.reducers';

import { cartReducer } from './reducers/cartReducers';
import {
  getProductDetailsReducer,
  getProductsReducer,
} from './reducers/productReducers';

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const initState = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
