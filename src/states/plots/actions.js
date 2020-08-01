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

import { fetchAllPlotData, getSelectFieldArray } from "../../utils/plotData";
import queryTemplates from "../../utils/queryTemplates";
import { fetchPlotData } from "../../utils/fetch";
import { getSpecById } from "../specifications/selector";
import { getSpecificationId } from "../plots/selector";
import { getModelNameById } from "../models/selector";
import { defaultPlot } from "../../components/StandardPlot/defaultPlot";

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
      dispatch(deleteStandardPlot());
    }
    dispatch(deletePlotInStore(id));
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
    const specification = getSpecById(
      getState(),
      getSpecificationId(getState(), id)
    );
    const X_Axis = [...specification.X_Axis];
    const Y_Axis = [...specification.Y_Axis];
    const SELECT = getSelectFieldArray(X_Axis, Y_Axis);
    const trainingDataQueryBody = {
      ...queryTemplates.trainingDataPoints,
      SELECT,
      FROM: modelName,
    };
    const modelDataQueryBody = {
      ...queryTemplates.modelDataPoints,
      SELECT,
      FROM: modelName,
    };
    Promise.all([
      fetchPlotData(trainingDataQueryBody).then((payload) => {
        return payload;
      }),
      fetchPlotData(modelDataQueryBody).then((payload) => {
        return payload;
      }),
    ]).then((response) =>
      dispatch(
        updateStandardPlotData(id, {
          training: response[0],
          model: response[1],
        })
      )
    );
  };
}

// TO avoid this store getting super huge, we probably need to
// deisgn a new store called " plotData " where we handle all the
// state related to plot data: for example, interactions of facets with
// plot data, etc.

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
