import {
  FETCH_MODEL_MARGINAL_SUCCESS,
  FETCH_MODEL_MARGINAL_PENDING,
  FETCH_MODEL_MARGINAL_ERROR,
  FETCH_DATA_MARGINAL_SUCCESS,
  FETCH_DATA_MARGINAL_PENDING,
  FETCH_DATA_MARGINAL_ERROR,
  FETCH_MODEL_DATA_SUCCESS,
  FETCH_MODEL_DATA_PENDING,
  FETCH_MODEL_DATA_ERROR,
  FETCH_TRAINING_DATA_SUCCESS,
  FETCH_TRAINING_DATA_PENDING,
  FETCH_TRAINING_DATA_ERROR,
  FETCH_DATA_DENSITY_SUCCESS,
  FETCH_DATA_DENSITY_PENDING,
  FETCH_DATA_DENSITY_ERROR,
  FETCH_MODEL_DENSITY_SUCCESS,
  FETCH_MODEL_DENSITY_PENDING,
  FETCH_MODEL_DENSITY_ERROR,
  INITIALIZE_NEW_STANDARD_PLOT,
  DELETE_STANDARD_PLOT,
} from "./constants";

import { getSelectFieldArray } from "../../utils/plotData";
import { getPlotAllIds } from "../plots/selector";
import { nextAvaliableId } from "../../utils/plotData";
import queryTemplates from "../../utils/queryTemplates";
import { fetchPlotData } from "../../utils/fetch";
import { getSpecById } from "../specifications/selector";
import { getSpecificationId } from "../plots/selector";
import { getModelNameById } from "../models/selector";

function initializePlot(id) {
  return {
    type: INITIALIZE_NEW_STANDARD_PLOT,
    payload: {
      id: id,
    },
  };
}

export function createNewStandardPlot() {
  return (dispatch, getState) => {
    const allIds = getPlotAllIds(getState());
    const newId = nextAvaliableId(allIds);
    dispatch(initializePlot(newId));
  };
}

export function deleteStandardPlot(id) {
  return {
    type: DELETE_STANDARD_PLOT,
    payload: {
      id: id,
    },
  };
}

export function updateStandardPlotData(id, newStandardPlotData) {
  return {
    type: FETCH_MODEL_DATA_SUCCESS,
    payload: {
      id: id,
      newStandardPlotData: newStandardPlotData,
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
