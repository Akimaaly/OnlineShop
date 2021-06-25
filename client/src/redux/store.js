import {applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/root";
import initState from "./initialState";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";



const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  
  export default store;