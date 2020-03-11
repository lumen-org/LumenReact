import { combineReducers } from "redux";
import appReducer from "./states/app/reducer";
import modelReducer from "./states/model/reducer";

export default combineReducers({
  appReducer,
  modelReducer
});
