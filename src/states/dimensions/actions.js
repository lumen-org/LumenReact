import { CREATE_NEW_DIMENSION } from "./constants";

export const createNewDimension = (modelName, dimensions) => {
  return {
    type: CREATE_NEW_DIMENSION,
    payload: {
          modelName,
          dimensions,
    }
  }
};