import {
  CHANGE_ACTIVE_VISUALIZATION,
  CREATE_NEW_VISUALIZATION,
  DELETE_VISUALIZATION,
  FILL_VISUALIZATION
} from "./constants";
import { v4 as uuidv4 } from 'uuid';

export const createNewVisualization = (payload) => {
  return dispatch => {
    dispatch(_createNewVisualization(payload));
    return new Promise(function(resolve, reject) {
      resolve();
    });
  }
}
export const _createNewVisualization = (modelName, id=uuidv4(), modelId = null, specificationId = null, plotId = null) => {
  return {
    type: CREATE_NEW_VISUALIZATION,
    payload: {
      id,
      modelId,
      specificationId,
      plotId
    }
  }
};

export const deleteVisualization = (visualizationId) => {
  return {
    type: DELETE_VISUALIZATION,
     payload:  {
      visualizationId
     }
  }
};

export const changeActiveVisualization = (visualizationId) => {
  return {
    type: CHANGE_ACTIVE_VISUALIZATION,
    payload: {
      visualizationId
    }
  }
};

export const fillVisualization = (visualizationId, modelId, specificationId, plotId) => {
  return {
    type: FILL_VISUALIZATION,
    payload: {
      visualizationId,
      modelId, 
      specificationId,
      plotId
    }
  }
}