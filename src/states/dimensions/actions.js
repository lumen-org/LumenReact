import { ADD_ALL_DIMENSIONS, GET_ALL_DIMENSION_IDS } from "./constants";

export const addAllDimensions = (modelId, modelName, dimensions) => {
  // let dimName = { "bla": "bla", "fegrt": "dkei"}; 
  return {
    type: ADD_ALL_DIMENSIONS,
    payload: {
          modelId,
          modelName,
          dimensions,
    }
  }
};

export const getAllDimensionIds = () => {
  return {
    type: GET_ALL_DIMENSION_IDS,
    payload: {
    }
  }
};