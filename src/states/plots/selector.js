import { createSelector } from "reselect";

export const getStandardPlotDataById = (state, id) => {
  return state.plots.plots.byId[id].standardPlotData || [];
};

export const getMultiPlotDataById = (state, id) => {
  return state.plots.plots.byId[id].multiPlotData || [];
};

export const getPlotLayoutById = (state, id) => {
  return state.plots.plots.byId[id].layout || {};
};
