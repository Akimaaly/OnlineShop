

import { combineReducers } from "redux";
import goodReducer from "./good";

const rootReducer = combineReducers({
  goods: goodReducer,
  
});

export default rootReducer;