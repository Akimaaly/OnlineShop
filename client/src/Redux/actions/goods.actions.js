import {
  GET_ALL_GOODS,
  GOOD_ADD_ERR,
  GOOD_ADD_SUCCESS,
  GOOD_ADD_START,
  GET_GOODS_OF_CURRENT_SELLER_ERR,
  GET_GOODS_OF_CURRENT_SELLER_START,
  GET_GOODS_OF_CURRENT_SELLER_SUCCESS,
  GOOD_DELETE_SUCCESS,
} from '../types';
import axios from 'axios';

export const getAllGoods = () => async (dispatch) => {
  const allGoods = (await axios.get('http://localhost:8080/good/all')).data;
  dispatch({
    type: GET_ALL_GOODS,
    payload: allGoods,
  });
};

export const addGoodStart = () => ({ type: GOOD_ADD_START });
export const addGoodSuccess = (payload) => ({
  type: GOOD_ADD_SUCCESS,
  payload,
});
export const addGoodErr = (err) => ({
  type: GOOD_ADD_ERR,
  payload: err,
  error: true,
});

export const addGood = (params) => async (dispatch) => {
  dispatch(addGoodStart());
  const response = await fetch('http://localhost:8080/good/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  if (response.ok) {
    await response.json();
    return dispatch(addGoodSuccess(params));
  }
  const err = await response.json();
  dispatch(addGoodErr(err));
};

export const getGoodAsyncStart = () => ({
  type: GET_GOODS_OF_CURRENT_SELLER_START,
});
export const getGoodAsyncSuccess = (payload) => ({
  type: GET_GOODS_OF_CURRENT_SELLER_SUCCESS,
  payload,
});
export const getGoodAsyncErr = (payload) => ({
  type: GET_GOODS_OF_CURRENT_SELLER_ERR,
  payload,
});

export const getGoodsOfCurrentSeller = (id) => async (dispatch) => {
  dispatch(getGoodAsyncStart());
  const response = await fetch(`http://localhost:8080/good/${id}`);

  if (response.ok) {
    const parsedGoods = await response.json();
    return dispatch(getGoodAsyncSuccess(parsedGoods));
  }
  const err = await response.json();
  dispatch(getGoodAsyncErr(err));
};

export const deleteGood = (id) => async (dispatch) => {
  const response = await axios.delete(`http://localhost:8080/good/${id}`);
  if (response.status === 200) {
    dispatch({
      type: GOOD_DELETE_SUCCESS,
      payload: { id },
    });
  }
};
