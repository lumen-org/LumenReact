import { ADD_ALL_DIMENSIONS, DELETE_DIMENSIONS } from "./constants";
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

export const deleteDimensions = (modelId) => {
  return {
    type: DELETE_DIMENSIONS,
    payload: {
      modelId: modelId
    }
  }
};

export const _deleteDimensions = (modelId) => {
  return (dispatch, getState) => {
  }
};