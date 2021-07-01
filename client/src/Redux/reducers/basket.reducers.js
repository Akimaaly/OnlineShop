import * as actionTypes from '../types';

export default function basketReducer(state = { basketItems: [] }, action) {
  switch (action.type) {

    case actionTypes.BASKET_INIT:
      const items = action.payload;
      return {
        ...state,
        basketItems: items,
      };

    case actionTypes.ADD_TO_BASKET:
      const item = action.payload;

      const existItem = state.basketItems.find(
        (x) => x.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          basketItems: state.basketItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          basketItems: [...state.basketItems, item],
        };
      }

    case actionTypes.DELETE_FROM_BASKET:
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (x) => x.product !== action.payload
        ),
      };

    default:
      return state;
  }
}
