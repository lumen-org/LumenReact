import { combineReducers } from "redux";
import app from "./states/app/reducer";
import specifications from "./states/specifications/reducer";
import plots from "./states/plots/reducer";
import models from "./states/models/reducer";
import schemes from "./states/schemes/reducer";
export default combineReducers({
  app,
  specifications,
  models,
  schemes,
  plots,
});
