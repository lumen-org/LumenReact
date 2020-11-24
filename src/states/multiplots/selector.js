export const getMultiPlotDataById = (state, id) => {
  return state.multiplots.multiPlots[id] || [];
};

export const getPlotLayoutById = (state, id) => {
  return state.multiplots.layout[id] || {};
};
