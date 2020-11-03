import { ADD_ALL_DIMENSIONS } from "./constants";
import { getLastCreatedModelId } from "../models/selector";

export const addAllDimensions = (modelName, fields) => {
  return (dispatch, getState) => {
    const modelId = getLastCreatedModelId(getState());
    dispatch(_addAllDimensions(modelId, modelName, fields));
  };
};
export const _addAllDimensions = (modelId, modelName, dimensions) => {
  return {
    type: ADD_ALL_DIMENSIONS,
    payload: {
          modelId,
          modelName,
          dimensions,
    }
  }
};
