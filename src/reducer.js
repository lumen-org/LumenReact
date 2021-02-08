import { combineReducers } from "redux";
import app from "./states/app/reducer";
import specifications from "./states/specifications/reducer";
import standardspecifications from "./states/standardspecifications/reducer";
import dmpspecifications from "./states/dmpspecifications/reducer";
import plots from "./states/plots/reducer";
import visualizations from "./states/visualizations/reducer";
import models from "./states/models/reducer";
import dimensions from "./states/dimensions/reducer";
import standardplots from "./states/standardplots/reducer";
import multiplots from "./states/multiplots/reducer";
import plotSettings from "./states/plotSettings/reducer";

export default combineReducers({
  app,
  specifications,
  standardspecifications,
  dmpspecifications,
  visualizations,
  models,
  dimensions,
  plots,
  standardplots,
  multiplots,
  plotSettings

});
