import {
  GET_ALL_GOODS,
  GOOD_ADD_SUCCESS,
  GET_GOODS_OF_CURRENT_SELLER_SUCCESS,
  GOOD_DELETE_SUCCESS,
} from '../types';

export default function goodsReducer(state = [], { type, payload }) {
  switch (type) {
    case GET_ALL_GOODS: {
      return payload;
    }
    case GOOD_ADD_SUCCESS: {
      return [...state, payload];
    }
    case GET_GOODS_OF_CURRENT_SELLER_SUCCESS: {
      return payload;
    }

    case GOOD_DELETE_SUCCESS: {
      const { id} = payload;

      const newGoodState = state.filter((good) => {
        return good._id !== id;
      });
      return newGoodState;
    }

    default:
      return state;
  }
}
