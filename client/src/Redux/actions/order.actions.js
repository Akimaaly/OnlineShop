import {
  GET_ALL_ORDERS,
  GET_ORDERS_OF_CURRENT_USER,
  CREATE_ORDER,
  DELETE_ORDER,
} from '../order.types';
import api from '../../api';

export const getOrdersOfCurrentUser = (id) => async (dispatch) => {
  const allCurrentUserOrders = await api.getOrdersOfUser(id);
  return dispatch({
    type: GET_ORDERS_OF_CURRENT_USER,
    payload: allCurrentUserOrders,
  });
};

export const createOrder = (body) => async (dispatch) => {
  const updatedOrders = await api.createOrder(body);
  return dispatch({
    type: CREATE_ORDER,
    payload: updatedOrders,
  });
};
