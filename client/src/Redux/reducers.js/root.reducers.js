import { combineReducers } from 'redux';
import basketReducer from './basket.reducers';
import goodsReducer from './goods.reducers';
import orderReducer from './order.reducers';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  goods: goodsReducer,
  user: userReducer,
  basket: basketReducer,
  orders: orderReducer,
});

export default rootReducer;
