import { combineReducers } from "redux";
import app from "./states/app/reducer";
import modelReducer from "./states/model/reducer";

export default combineReducers({
  app,
  modelReducer
});
