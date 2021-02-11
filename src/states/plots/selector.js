export const getSpecificationId = (state, id) => {
  return state.plots.plots.byId[id].specificationId || [];
};

export const getVisualizationId = (state, id) => {
  return state.plots.plots.byId[id].visualizationId;
};
export const getPlotLayoutById = (state, id) => {
  return state.plots.plots.byId[id].layout || {};
};

export const getPlotAllIds = (state) => {
  return state.plots.plots.allIds;
};

export const getPlotTypeById = (state, id) => {
  return state.plots.plots.byId[id].plotType;
};

export const getActivePlotId = (state) => {
  return state.plots.activePlotId;
};

export const getModelNameOfActivePlotId = (state) => {
  if (getActivePlotId(state) != null) {
    return state.plots.plots.byId[state.plots.activePlotId].model;
  }
  else {
    return "";
  }
};

export const getLastCreatedPlotId = (state) => {
  return state.plots.lastCreatedId;
};
