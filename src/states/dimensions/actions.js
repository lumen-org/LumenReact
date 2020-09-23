import { ADD_ALL_DIMENSIONS } from "./constants";

export const createNewDimension = (modelId, modelName, dimensions) => {
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