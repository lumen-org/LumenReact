import {
  UPDATE_PLOT_SPECIFICATIONS,
  CREATE_NEW_PLOT,
  CHANGE_ACTIVE_PLOT,
  DELETE_PLOT,
} from "./constants";

export function changeActivePlot(newActivePlotId) {
  return {
    type: CHANGE_ACTIVE_PLOT,
    payload: {
      newActivePlotId: newActivePlotId,
    },
  };
}

export function createNewPlot(modelName, specification_id) {
  return {
    type: CREATE_NEW_PLOT,
    payload: {
      modelName: modelName,
      specification_id: specification_id
    },
  };
}

export function deletePlot(id) {
  return {
    type: DELETE_PLOT,
    payload: {
      id: id,
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
