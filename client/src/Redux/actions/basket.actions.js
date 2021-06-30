import { ADD_TO_BASKET, DELETE_FROM_BASKET } from '../types';
import axios from 'axios';

export const addToBasket = (id, qty) => async (dispatch) => {
  const { data } = await axios.patch(`/basket/${id}`, { qty });

  dispatch({
    type: ADD_TO_BASKET,
    payload: data,
  });
};

export const deleteFromBasket = (id) => async (dispatch) => {
  const { data } = await axios.patch(`/basket/update/${id}`);

  dispatch({
    type: DELETE_FROM_BASKET,
    payload: data,
  });
};
