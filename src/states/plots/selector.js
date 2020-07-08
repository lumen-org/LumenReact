
export const getPlotDataById = (state, id) => {
  return state.plots.plots.byId[id].plotData || [];
};

export const getSpecificationId = (state, id) => {
  return state.plots.plots.byId[id].specificationId || [];
};

export const getVisualizationId = (state, id) => {
  return state.plots.plots.byId[id].visualizationId;
}
export const getPlotLayoutById = (state, id) => {
  return state.plots.plots.byId[id].layout || {};
};
