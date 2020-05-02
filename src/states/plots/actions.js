import { UPDATE_PLOT_SPECIFICATIONS, CREATE_NEW_PLOT } from "./constants";
export function createNewPlot(specifications, modelName) {
  return {
    type: CREATE_NEW_PLOT,
    payload: {
      specifications: specifications,
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
