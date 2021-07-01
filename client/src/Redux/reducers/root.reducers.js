import { combineReducers } from 'redux';
import basketReducer from './basket.reducers';
import goodsReducer from './goods.reducers';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  goods: goodsReducer,
  user: userReducer,
  basket: basketReducer,
});

export default rootReducer;
