import { CHANGE_ACTIVE_VISUALIZATION, CREATE_NEW_VISUALIZATION } from "./constants";

export const createNewVisualization = (modelName, modelId = -1, specificationId = -1, plotId = -1) => {
  return {
    type: CREATE_NEW_VISUALIZATION,
    payload: {
      modelName,
      modelId,
      specificationId,
      plotId
    }
  }
};

export const changeActiveVisualization = (visualizationId) => {
  return {
    type: CHANGE_ACTIVE_VISUALIZATION,
    payload: {
      visualizationId
    }
  }
}