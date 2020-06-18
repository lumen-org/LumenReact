import { createSelector } from "reselect";

export const getPlotDataById = (state, id) => {
  return state.plots.plots.byId[id].plotData || [];
};

export const getPlotLayoutById = (state, id) => {
  return state.plots.plots.byId[id].layout || {};
};
