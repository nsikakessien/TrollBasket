import { combineReducers } from "redux";
import shopReducer from "./shopping/shop-reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
