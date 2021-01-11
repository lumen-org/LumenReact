import { ADD_ALL_DIMENSIONS, DELETE_DIMENSIONS } from "./constants";
import { getLastCreatedModelId, isIdInAllIds } from "../models/selector";

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

export const _deleteDimensions = (modelId) => {
  return {
    type: DELETE_DIMENSIONS,
    payload: {
      modelId: modelId
    }
  }
};

export const deleteDimensions = (modelId) => {
  return (dispatch, getState) => {
    if(!isIdInAllIds(getState(), modelId)){
      dispatch(_deleteDimensions(modelId))
    }
  }
};