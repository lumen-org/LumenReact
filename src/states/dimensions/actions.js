import { CREATE_NEW_DIMENSION } from "./constants";

export const createNewDimension = (dimensionName, modelName) => {
  return {
    type: CREATE_NEW_DIMENSION,
    payload: {
      dimensionName,
      modelName,
    }
  }
};