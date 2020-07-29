import {
  UPDATE_PLOT_SPECIFICATIONS,
  CREATE_NEW_PLOT,
  CHANGE_ACTIVE_PLOT,
  DELETE_PLOT,
  UPDATE_PLOT_DATA,
  RESET_PLOT_DATA,
  UPDATE_PLOT_LAYOUT,
} from "./constants";
import { fetchAllPlotData } from "../../utils/plotData";
import { getSpecById } from "../specifications/selector";
import { getSpecificationId } from "../plots/selector";
import { getModelNameById } from "../models/selector";

export function changeActivePlot(newid) {
  return {
    type: CHANGE_ACTIVE_PLOT,
    payload: {
      newid: newid,
    },
  };
}

export function createNewPlot(modelName, visualizationId, specificationId) {
  return {
    type: CREATE_NEW_PLOT,
    payload: {
      modelName: modelName,
      specificationId: specificationId,
      visualizationId: visualizationId
    },
  };
}

export function deletePlot(id) {
  return {
    type: DELETE_PLOT,
    payload: {
      id: id,
    },
  };
}

export function updatePlotSpecifictions(id, newSpecifications) {
  return {
    type: UPDATE_PLOT_SPECIFICATIONS,
    payload: {
      id: id,
      newSpecifications: newSpecifications,
    },
  };
}

export function updatePlotData(id, newPlotData) {
  return {
    type: UPDATE_PLOT_DATA,
    payload: {
      id: id,
      newPlotData: newPlotData,
    },
  };
}

export function resetPlotData(id) {
  return {
    type: RESET_PLOT_DATA,
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
// TO avoid this store getting super huge, we probably need to
// deisgn a new store called " plotData " where we handle all the
// state related to plot data: for example, interactions of facets with
// plot data, etc.

export function fetchPlotData(id) {
  return (dispatch, getState) => {
    const modelName = getModelNameById(getState(), id);
    const specification = getSpecById(getState(), getSpecificationId(getState(),id));
    fetchAllPlotData(specification, modelName).then((payload) => {
      dispatch(resetPlotData(id));
      payload[0].map((payload) => {
        payload.then((payload) => {
          dispatch(updatePlotData(id, payload));
        });
      });
    });
  };
}

export function fetchPlotLayout(id) {
  return (dispatch, getState) => {
    const specification = getSpecById(getState(), getSpecificationId(getState(),id));
    const modelName = getModelNameById(getState(), id);
    const { X_Axis, Y_Axis } = specification;
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
