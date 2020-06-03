import { CHANGE_ACTIVE_VISUALIZATION, CREATE_NEW_VISUALIZATION } from "./constants";

export const createNewVisualization = (modelName, schemaId, specificationId, plotId) => {
  return {
    type: CREATE_NEW_VISUALIZATION,
    payload: {
      modelName,
      schemaId,
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