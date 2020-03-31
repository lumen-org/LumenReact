import { combineReducers } from "redux";
import app from "./states/app/reducer";
import modelReducer from "./states/model/modelReducer";

export default combineReducers({
  app,
  model: modelReducer
});
