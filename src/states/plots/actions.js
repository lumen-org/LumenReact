import { CREATE_NEW_PLOT, CHANGE_ACTIVE_PLOT, DELETE_PLOT } from "./constants";
import {
  STANDARD_PLOT,
  PCI_PLOT,
  MULTI_PLOT,
  DIFFERENTIAL_MARGINAL_PLOT,
} from "../../constants/plotTypes";
import {
  createNewStandardPlot,
  deleteStandardPlot,
} from "../standardplots/actions";
import { createNewMultiPlot, deleteMultiPlot } from "../multiplots/actions";

export function changeActivePlot(newid) {
  return {
    type: CHANGE_ACTIVE_PLOT,
    payload: {
      newid: newid,
    },
  };
}

export function createNewPlot(
  modelName,
  visualizationId,
  specificationId,
  plotType
) {
  return (dispatch, getState) => {
    if (plotType === STANDARD_PLOT) {
      dispatch(createNewStandardPlot());
    }
    if (plotType === MULTI_PLOT) {
      dispatch(createNewMultiPlot());
    }
    dispatch(createPlot(modelName, visualizationId, specificationId, plotType));
  };
}

function createPlot(modelName, visualizationId, specificationId, plotType) {
  return {
    type: CREATE_NEW_PLOT,
    payload: {
      modelName: modelName,
      specificationId: specificationId,
      visualizationId: visualizationId,
      plotType: plotType,
    },
  };
}

function deletePlotInStore(id) {
  return {
    type: DELETE_PLOT,
    payload: {
      id: id,
    },
  };
}

export function deletePlot(id, plotType) {
  return (dispatch, getState) => {
    if (plotType === STANDARD_PLOT) {
      dispatch(deleteStandardPlot(id));
    }
    if (plotType === MULTI_PLOT) {
      dispatch(deleteMultiPlot(id));
    }
    dispatch(deletePlotInStore(id));
  };
}
