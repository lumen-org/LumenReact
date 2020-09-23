import { CREATE_NEW_DIMENSION } from "./constants";

export const createNewDimension = (modelName, dimensions) => {
  // let dimName = { "bla": "bla", "fegrt": "dkei"}; 
  return {
    type: CREATE_NEW_DIMENSION,
    payload: {
          modelName,
          dimensions,
    }
  }
};