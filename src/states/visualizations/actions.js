import { CHANGE_ACTIVE_VISUALIZATION, CREATE_NEW_VISUALIZATION } from "./constants";

export const createNewVisualization = (modelName, modelId, specificationId, plotId) => {
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