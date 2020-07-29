import { combineReducers } from "redux";
import app from "./states/app/reducer";
import specifications from "./states/specifications/reducer";
import plots from "./states/plots/reducer";
import visualizations from "./states/visualizations/reducer";
import models from "./states/models/reducer";
import dimensions from "./states/dimensions/reducer";
export default combineReducers({
  app,
  specifications,
  visualizations,
  models,
  dimensions,
  plots,
});
