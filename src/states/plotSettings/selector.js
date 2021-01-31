export const getPlotTitleById = (state, id) => {
    return state.plotSettings.plotSettings[id].layout.title || "";
  };