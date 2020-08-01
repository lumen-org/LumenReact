export const getStandardPlotDataById = (state, id) => {
  return state.standardplots.standardPlots[id] || {};
};
