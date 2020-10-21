import { ADD_ALL_DIMENSIONS } from "./constants";

export const addAllDimensions = (modelId, modelName, dimensions) => {
  return {
    type: ADD_ALL_DIMENSIONS,
    payload: {
          modelId,
          modelName,
          dimensions,
    }
  }
};
