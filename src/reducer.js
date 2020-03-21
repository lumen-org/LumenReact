import { combineReducers } from "redux";
import app from "./states/app/reducer";
import model from "./states/model/reducer";

export default combineReducers({
  app,
  model
});
