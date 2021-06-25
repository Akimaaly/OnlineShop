import {
  GOOD_GET_START,
  GOOD_GET_SUCCESS,
  GOOD_GET_ERR,
  GOOD_ADD_START,
  GOOD_ADD_SUCCESS,
  GOOD_ADD_ERR,
  GOOD_DELETE_START,
  GOOD_DELETE_SUCCESS,
  GOOD_DELETE_ERR,
  GOOD_EDIT_START,
  GOOD_EDIT_SUCCESS,
  GOOD_EDIT_ERR,
} from '../types';

export default function goodReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GOOD_GET_START: {
      return { ...state, loading: true };
    }

    case GOOD_GET_SUCCESS: {
      return { ...state, values: payload, loading: false, error: null };
    }

    case GOOD_GET_ERR: {
      return { ...state, loading: false, error: payload };
    }

    case GOOD_ADD_START: {
      return { ...state, loading: true };
    }

    case GOOD_ADD_SUCCESS: {
      return {
        ...state,
        values: [...state.values, payload],
        loading: false,
        error: null,
      };
    }

    case GOOD_ADD_ERR: {
      return { ...state, loading: false, error: payload };
    }

    case GOOD_DELETE_SUCCESS: {
      const { id } = payload;
      console.log('GOOD_DELETE_SUCCESS==>', id);
      const newGoodState = state.values.filter((goods) => {
        return goods._id !== id;
      });
      console.log(newGoodState);
      return { ...state, values: newGoodState };
    }

    default:
      return state;
  }
}
