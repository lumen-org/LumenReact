
export const getStandardPlotDataById = (state, id) => {
  return state.plots.plots.byId[id].standardPlotData || [];
};

export const getMultiPlotDataById = (state, id) => {
  return state.plots.plots.byId[id].multiPlotData || [];
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
