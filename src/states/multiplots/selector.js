export const getMultiPlotDataById = (state, id) => {
  return state.multiplots.multiPlots[id] || [];
};

export const getPlotLayoutById = (state, id) => {
  console.log(state.multiplots.layout);
  return state.multiplots.layout[id] || {};
};
