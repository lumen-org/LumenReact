import {
  FETCH_DATA_PENDING,
  FETCH_MODEL_MARGINAL_SUCCESS,
  FETCH_MODEL_MARGINAL_ERROR,
  FETCH_DATA_MARGINAL_SUCCESS,
  FETCH_DATA_MARGINAL_ERROR,
  FETCH_MODEL_DATA_SUCCESS,
  FETCH_MODEL_DATA_ERROR,
  FETCH_TRAINING_DATA_SUCCESS,
  FETCH_TRAINING_DATA_PENDING,
  FETCH_TRAINING_DATA_ERROR,
  FETCH_DATA_DENSITY_SUCCESS,
  FETCH_DATA_DENSITY_ERROR,
  FETCH_MODEL_DENSITY_SUCCESS,
  FETCH_MODEL_DENSITY_ERROR,
  FETCH_INITIAL_PLOTDATA_SUCCESS,
  FETCH_INITIAL_PLOTDATA_ERROR,
  INITIALIZE_NEW_STANDARD_PLOT,
  DELETE_STANDARD_PLOT,
} from "./constants";

import { getSelectFieldArray } from "../../utils/plotData";
import { getPlotAllIds } from "../plots/selector";
import { nextAvaliableId } from "../../utils/plotData";
import queryTemplates from "../../utils/queryTemplates";
import { fetchPlotData } from "../../utils/fetch";
import { getSpecById } from "../specifications/selector";
import { getSpecificationId, getActivePlotId } from "../plots/selector";
import { getModelNameById } from "../models/selector";
import {
  getTrainingDataQueryBodyById,
  getModelDataQueryBodyById,
} from "./selector";

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

export function fetchDataPending(id) {
  return {
    type: FETCH_DATA_PENDING,
    payload: {
      id,
    },
  };
}

export function fetchTrainingDataSucess(id, trainingDataPoints) {
  return {
    type: FETCH_TRAINING_DATA_SUCCESS,
    payload: {
      id,
      trainingDataPoints,
    },
  };
}

export function fetchTrainingDataPoints() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const trainingDataQueryBody = getTrainingDataQueryBodyById(getState(), id);
    fetchPlotData(trainingDataQueryBody).then((response) => {
      dispatch(fetchTrainingDataSucess(id, response));
    });
  };
}

export function fetchModelDataSucess(id, modelDataPoints) {
  return {
    type: FETCH_MODEL_DATA_SUCCESS,
    payload: {
      id,
      modelDataPoints,
    },
  };
}

export function fetchModelDataPoints() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const modelDataQueryBody = getModelDataQueryBodyById(getState(), id);
    fetchPlotData(modelDataQueryBody).then((response) => {
      dispatch(fetchModelDataSucess(id, response));
    });
  };
}

export function updateStandardPlotData(id, newStandardPlotData) {
  return {
    type: FETCH_INITIAL_PLOTDATA_SUCCESS,
    payload: {
      id: id,
      newStandardPlotData: newStandardPlotData,
    },
  };
}

export function fetchInitialStandardPlotData(id) {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const modelDataQueryBody = getModelDataQueryBodyById(getState(), id);
    const trainingDataQueryBody = getTrainingDataQueryBodyById(getState(), id);
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
