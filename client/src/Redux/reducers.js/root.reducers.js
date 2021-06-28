import { combineReducers } from 'redux';
import goodsReducer from './goods.reducers';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  goods: goodsReducer,
  user: userReducer,
});

export default rootReducer;
