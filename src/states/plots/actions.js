import { CREATE_NEW_PLOT, CHANGE_ACTIVE_PLOT, DELETE_PLOT } from "./constants";
import { STANDARD_PLOT, PCI_PLOT, MULTI_PLOT } from "../../constants/plotTypes";
import {
  createNewStandardPlot,
  deleteStandardPlot,
} from "../standardplots/actions";
import { getPlotTypeById, getPlotAllIds } from "./selector";
import { createNewMultiPlot, deleteMultiPlot } from "../multiplots/actions";
import { nextAvaliableId } from "../../utils/plotData";
import { hidePCIGraph, showPCIGraph } from "../models/actions";
import { selectActiveModelId } from "../visualizations/selector";

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
    const newId = nextAvaliableId(getPlotAllIds(getState()));

    if (plotType === STANDARD_PLOT) {
      dispatch(createNewStandardPlot());
    }
    if (plotType === MULTI_PLOT) {
      dispatch(createNewMultiPlot());
    }
    if (plotType === PCI_PLOT) {
      dispatch(showPCIGraph(selectActiveModelId(getState())));
      //return;
    }
    dispatch(createPlot(modelName, visualizationId, specificationId, plotType));
    dispatch(changeActivePlot(newId));
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

export function deletePlot(id) {
  return (dispatch, getState) => {
    const plotType = getPlotTypeById(getState(), id);
    if (plotType === STANDARD_PLOT) {
      dispatch(deleteStandardPlot(id));
    }
    if (plotType === MULTI_PLOT) {
      dispatch(deleteMultiPlot(id));
    }
    if (plotType === PCI_PLOT) {
      console.log(id);
      let modelId = getState().plots.plots.byId[id].model;
      dispatch(hidePCIGraph(modelId));
    }
    dispatch(deletePlotInStore(id));
  };
}
