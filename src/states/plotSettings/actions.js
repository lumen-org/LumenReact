import {INITIALIZE_NEW_PLOT_SETTINGS, DELETE_PLOT_SETTINGS} from "./constants"


export function initializeNewPlotSettings(id) {
    return {
      type: INITIALIZE_NEW_PLOT_SETTINGS,
      payload: {
        id: id,
      },
    };
}


export function deletePlotSetting(id){
  return {
    type: DELETE_PLOT_SETTINGS,
    payload: {
      id: id,
    },
  };
}

