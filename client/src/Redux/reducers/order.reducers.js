import {
  GET_ALL_ORDERS,
  GET_ORDERS_OF_CURRENT_USER,
  CREATE_ORDER,
  DELETE_ORDER,
  CHANGE_STATUS_OF_ORDER
} from '../order.types';

export default function orderReducer(state = [], { type, payload }) {
  switch (type) {
    case GET_ORDERS_OF_CURRENT_USER: {
      return payload;
    }
    case CREATE_ORDER: {
      return [...state, payload];
    }

    case DELETE_ORDER: {
      const { id } = payload;
      const newOrdersState = state.filter((order) => {
        return order._id !== id;
      });
      return newOrdersState;
    }
    case CHANGE_STATUS_OF_ORDER: {
      return [...state, payload];
    }

    default:
      return state;
  }
}
