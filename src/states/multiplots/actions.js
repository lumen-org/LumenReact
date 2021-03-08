import {
  UPDATE_MULTI_PLOT_DATA,
  RESET_MULTI_PLOT_DATA,
  UPDATE_PLOT_LAYOUT,
  INITIALIZE_NEW_MULTI_PLOT,
  DELETE_MULTI_PLOT,
} from "./constants";

import { fetchAllPlotData } from "../../utils/plotData";
import { getPlotAllIds } from "../plots/selector";
import { nextAvaliableId } from "../../utils/plotData";
import queryTemplates from "../../utils/queryTemplates";
import { getSpecById } from "../specifications/selector";
import { getSpecificationId } from "../plots/selector";
import { getModelNameById } from "../models/selector";
import { xAxisName, yAxisName } from "../../configs/specificationFacetsConfig";

function initializePlot(id) {
  return {
    type: INITIALIZE_NEW_MULTI_PLOT,
    payload: {
      id: id,
    },
  };
}

export function createNewMultiPlot() {
  return (dispatch, getState) => {
    const allIds = getPlotAllIds(getState());
    const newId = nextAvaliableId(allIds);
    dispatch(initializePlot(newId));
  };
}

export function deleteMultiPlot(id) {
  return {
    type: DELETE_MULTI_PLOT,
    payload: {
      id: id,
    },
  };
}

export function updateMultiPlotData(id, newPlotData) {
  return {
    type: UPDATE_MULTI_PLOT_DATA,
    payload: {
      id: id,
      newPlotData: newPlotData,
    },
  };
}

export function resetPlotData(id) {
  return {
    type: RESET_MULTI_PLOT_DATA,
    payload: {
      id: id,
    },
  };
}

export function updatePlotLayout(id, newLayout) {
  return {
    type: UPDATE_PLOT_LAYOUT,
    payload: {
      id: id,
      newLayout: newLayout,
    },
  };
}
export function fetchMultiPlotData(id) {
  return (dispatch, getState) => {
    const modelName = getModelNameById(getState(), id);
    const specId = getSpecificationId(getState(), id);
    const specification = getSpecById(getState(), specId);
    fetchAllPlotData(specification, modelName).then((payload) => {
      dispatch(resetPlotData(id));
      payload[0].map((payload) => {
        payload.then((payload) => {
          dispatch(updateMultiPlotData(id, payload));
        });
      });
    });
  };
}

export function fetchMultiPlotLayout(id) {
  return (dispatch, getState) => {
    const specId = getSpecificationId(getState(), id);

    const specification = getSpecById(getState(), specId);
    const modelName = getModelNameById(getState(), id);
    const X_Axis = specification[xAxisName];
    const Y_Axis = specification[yAxisName];
    const defaultLayout = {
      autosize: true,
      title: modelName,
      grid: {
        rows: 0,
        columns: 0,
        pattern: "independent",
      },
    };

    if (X_Axis.size === 0 && Y_Axis.size === 0) {
      dispatch(updatePlotLayout(id, defaultLayout));
    } else if (X_Axis.size === 0 || Y_Axis.size === 0) {
      dispatch(
        updatePlotLayout(id, {
          ...defaultLayout,
          grid: {
            ...defaultLayout.grid,
            rows: 1,
            columns: 1,
          },
        })
      );
    } else {
      dispatch(
        updatePlotLayout(id, {
          ...defaultLayout,
          grid: {
            ...defaultLayout.grid,
            rows: Y_Axis.size,
            columns: X_Axis.size,
          },
        })
      );
    }
  };
}
