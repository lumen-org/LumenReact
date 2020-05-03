import {
  UPDATE_PLOT_SPECIFICATIONS,
  CREATE_NEW_PLOT,
  CHANGE_ACTIVE_PLOT,
} from "./constants";

export function changeActivePlot(newActivePlotId) {
  return {
    type: CHANGE_ACTIVE_PLOT,
    payload: {
      newActivePlotId: newActivePlotId,
    },
  };
}

export function createNewPlot(modelName) {
  return {
    type: CREATE_NEW_PLOT,
    payload: {
      modelName: modelName,
    },
  };
}

export function updatePlotSpecifictions(id, newSpecifications) {
  return {
    type: UPDATE_PLOT_SPECIFICATIONS,
    payload: {
      id: id,
      newSpecifications: newSpecifications,
    },
  };
}
