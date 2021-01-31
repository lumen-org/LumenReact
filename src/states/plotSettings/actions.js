import {INITIALIZE_NEW_PLOT_SETTINGS, 
        DELETE_PLOT_SETTINGS,
        UPDATE_PLOT_TITLE,
        UPDATE_XLABEL,
        UPDATE_YLABEL
        } from "./constants"





export function initializeNewPlotSettings(id) {
    return {
      type: INITIALIZE_NEW_PLOT_SETTINGS,
      payload: {
        id: id,
      },
    };
}

export function updatePlotTitle(id, updatedTitle) {
  return {
    type: UPDATE_PLOT_TITLE,
    payload: {
      id,
      updatedTitle
    },
  };
}



export function updateXlabel(id) {
  return {
    type: UPDATE_XLABEL,
    payload: {
      id: id,
    },
  };
}

export function updateYlabel(id) {
  return {
    type: UPDATE_YLABEL,
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

