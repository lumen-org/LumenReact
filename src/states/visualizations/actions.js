import {
  CHANGE_ACTIVE_VISUALIZATION,
  CREATE_NEW_VISUALIZATION,
  DELETE_VISUALIZATION,
  FILL_VISUALIZATION,
} from "./constants";
import { getLastCreatedModelId } from "../models/selector";
import { getLastCreatedSpecId } from "../specifications/selector";
import { getLastCreatedPlotId } from "../plots/selector";
import { getLastCreatedVisualizationId } from "./selector";
import { v4 as uuidv4 } from "uuid";

export const createNewVisualization = () => {
  return (dispatch, getState) => {
    const modelId = getLastCreatedModelId(getState());
    const specificationId = getLastCreatedSpecId(getState());

    dispatch(_createNewVisualization(uuidv4(), modelId, specificationId));
  };
};

export const _createNewVisualization = (
  id = uuidv4(),
  modelId = null,
  specificationId = null
) => {
  return {
    type: CREATE_NEW_VISUALIZATION,
    payload: {
      id,
      modelId,
      specificationId,
    },
  };
};

export const deleteVisualization = (visualizationId) => {
  return {
    type: DELETE_VISUALIZATION,
    payload: {
      visualizationId,
    },
  };
};

export const changeActiveVisualization = () => {
  return (dispatch, getState) => {
    const visualizationId = getLastCreatedVisualizationId(getState());
    dispatch(_changeActiveVisualization(visualizationId));
  };
};

export const _changeActiveVisualization = (visualizationId) => {
  return {
    type: CHANGE_ACTIVE_VISUALIZATION,
    payload: {
      visualizationId,
    },
  };
};

export const _fillVisualization = (
  visualizationId,
  modelId,
  specificationId,
  plotId
) => {
  return {
    type: FILL_VISUALIZATION,
    payload: {
      visualizationId,
      modelId,
      specificationId,
      plotId,
    },
  };
};

export const fillVisualization = () => {
  return (dispatch, getState) => {
    const modelId = getLastCreatedModelId(getState());
    const specId = getLastCreatedSpecId(getState());
    const plotId = getLastCreatedPlotId(getState());
    const visId = getLastCreatedVisualizationId(getState());
    dispatch(_fillVisualization(visId, modelId, specId, plotId));
  };
};
