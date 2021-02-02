export const getPlotTitleById = (state, id) => {
    return state.plotSettings.plotSettings[id].layout.title || "";
  };

export const getPlotSettingsById = (state, id) => {
    return state.plotSettings.plotSettings[id] || {}
}