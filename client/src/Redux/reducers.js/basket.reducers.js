import initState from '../initState';
import { ADD_TO_BASKET, DELETE_FROM_BASKET } from '../types';

export default function basketReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_BASKET: {
      return payload;
    }
    case DELETE_FROM_BASKET: {
      return payload;
    }

    default:
      return state;
  }
}
