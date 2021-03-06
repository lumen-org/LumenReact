import { CREATE_NEW_MODEL, SHOW_PCI_GRAPH, HIDE_PCI_GRAPH, UPDATE_MODEL_DIMENSIONS, DELETE_MODEL} from "./constants";
import { v4 as uuidv4 } from 'uuid';
import { hasAnotherVisualizationWithSameModelId } from "../visualizations/selector";

export const createNewModel = (modelName, model, id=uuidv4()) => {
  return {
    type: CREATE_NEW_MODEL,
    payload: {
      modelName,
      model, // model is an array with all the dimensions
      id
    }
  }
};

export const showPCIGraph = (id) => {
  return {
    type: SHOW_PCI_GRAPH,
    payload: {
      id
    }
  }
};

export const hidePCIGraph = (id) => {
  return {
    type: HIDE_PCI_GRAPH,
    payload: {
      id
    }
  }
};

export const _deleteModel = (id) => {
  return {
    type: DELETE_MODEL,
    payload: {
      id
    }
  }
}

export const deleteModelIfNecessary = (id) => {
  return (dispatch, getState) => {
    if (!hasAnotherVisualizationWithSameModelId(getState())){
      dispatch(_deleteModel(id))
    }
  }
}



export const updateModelDimensions = (id, dimensions) => {
  return {
    type: UPDATE_MODEL_DIMENSIONS,
    payload: {
      id,
      dimensions,
    }
  }
};