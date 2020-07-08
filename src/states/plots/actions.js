import {
  UPDATE_PLOT_SPECIFICATIONS,
  CREATE_NEW_PLOT,
  CHANGE_ACTIVE_PLOT,
  DELETE_PLOT,
  UPDATE_MULTI_PLOT_DATA,
  UPDATE_STANDARD_PLOT_DATA,
  RESET_MULTI_PLOT_DATA,
  UPDATE_PLOT_LAYOUT,
} from "./constants";
import { fetchAllPlotData } from "../../utils/plotData";
import { fetchPlotData } from "../../utils/fetch";
import { getSpecById } from "../specifications/selector";
import { getModelNameById } from "../visualizations/selector";

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
      visualizationId: visualizationId,
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

export function updateMultiPlotData(id, newPlotData) {
  return {
    type: UPDATE_MULTI_PLOT_DATA,
    payload: {
      id: id,
      newPlotData: newPlotData,
    },
  };
}

export function updateStandardPlotData(id, newStandardPlotData) {
  return {
    type: UPDATE_STANDARD_PLOT_DATA,
    payload: {
      id: id,
      newStandardPlotData: newStandardPlotData,
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

// TODO: Make sure that only one dimension allowed for each specification
// for standard plot
export function fetchStandardPlotData(id) {
  return (dispatch, getState) => {
    const modelName = getModelNameById(getState(), id);
    const specification = getSpecById(getState(), id);
    const X_Axis = [...specification.X_Axis];
    const Y_Axis = [...specification.Y_Axis];
    var SELECT;
    if (X_Axis.length === 0 && Y_Axis.length > 0) {
      SELECT = [X_Axis[0]];
    } else if (Y_Axis.length === 0 && X_Axis.length > 0) {
      SELECT = [Y_Axis[0]];
    } else if (Y_Axis.length === 0 && X_Axis.length === 0) {
      SELECT = [];
    } else {
      SELECT = [X_Axis[0], Y_Axis[0]];
    }
    const BODY = {
      SELECT,
      FROM: modelName,
    };
    fetchPlotData(BODY).then((payload) => {
      dispatch(updateStandardPlotData(id, payload));
    });
  };
}

// TO avoid this store getting super huge, we probably need to
// deisgn a new store called " plotData " where we handle all the
// state related to plot data: for example, interactions of facets with
// plot data, etc.

export function fetchMultiPlotData(id) {
  return (dispatch, getState) => {
    const modelName = getModelNameById(getState(), id);
    const specification = getSpecById(getState(), id);
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
    const specification = getSpecById(getState(), id);
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
