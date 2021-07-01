import * as actionTypes from '../types';

import axios from 'axios';
import api from '../../api';
import {getAllBasket} from '../../api/endpoints/basket';

export const basketAddGood = (payload) => ({
  type: actionTypes.ADD_TO_BASKET,
  payload,
});

export const basketInit = (payload) => ({
  type: actionTypes.BASKET_INIT,
  payload
})

export const initBasket = () => async (dispatch) => {
  const response = await getAllBasket();
  return dispatch(basketInit(response));
}

export const addToBasket = (id, qty) => async (dispatch) => {
  const response = await api.addGoodToBasket(id, { qty, updateQty: false });
  return dispatch(initBasket())
};

export const updateInBasket = (id, qty) => async (dispatch) => {
  const response = await api.addGoodToBasket(id, { qty, updateQty: true });
  return dispatch(initBasket())
}

export const deleteFromBasket = (id) => async (dispatch) => {
  await api.deleteFromBasket(id)
  return dispatch(initBasket())
};


export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_BASKET,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.DELETE_FROM_BASKET,
    payload: id,
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
