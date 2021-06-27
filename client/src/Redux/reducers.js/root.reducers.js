import { combineReducers } from "redux";
import goodsReducer from "./goods.reducers";

const rootReducer = combineReducers({
  goods: goodsReducer,
})

export default rootReducer