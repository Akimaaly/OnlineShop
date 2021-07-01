import * as actionTypes from '../constants/cartConstants';

import axios from 'axios';
import api from '../../api';

export const basketAddGood = (payload) => ({
  type: ADD_TO_BASKET,
  payload,
});
export const addToBasket = (id, qty) => async (dispatch) => {
  const response = await api.addGoodToBasket(id, { qty });
  console.log(response);
  return dispatch(basketAddGood(response));
};

export const deleteFromBasket = (id) => async (dispatch) => {
  const { data } = await axios.patch(
    `http://localhost:8080/basket/update/${id}`
  );

  dispatch({
    type: DELETE_FROM_BASKET,
    payload: data,
  });
};





// 




import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
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
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
