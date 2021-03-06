import { ADD_TO_BASKET, DELETE_FROM_BASKET, CLEAR_BASKET } from '../types';
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
  const response = await api.deleteGood(id);
  return dispatch({
    type: DELETE_FROM_BASKET,
    payload: response,
  });
};
