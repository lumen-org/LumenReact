import { combineReducers } from "redux";
import app from "./states/app/reducer";
import model from "./states/model/reducer";
import plots from "./states/plots/reducer";
export default combineReducers({
  app,
  model,
  plots,
});
