import {
  FETCH_DATA_PENDING,
  FETCH_MODEL_X_MARGINAL_SUCCESS,
  FETCH_MODEL_Y_MARGINAL_SUCCESS,
  FETCH_DATA_X_MARGINAL_SUCCESS,
  FETCH_DATA_Y_MARGINAL_SUCCESS,
  FETCH_MODEL_MARGINAL_ERROR,
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
  FETCH_MODEL_PREDICTION_ERROR,
  FETCH_DATA_PREDICTION_ERROR,
  FETCH_DATA_PREDICTION_SUCCESS,
  FETCH_MODEL_PREDICTION_SUCCESS,
  INITIALIZE_NEW_STANDARD_PLOT,
  DELETE_STANDARD_PLOT,
} from "./constants";

import { getPlotAllIds } from "../plots/selector";
import { nextAvaliableId } from "../../utils/plotData";
import {
  createIntermediateModels,
  fetch3DPlotData,
  fetch2DPlotData,
  fetch1DPlotData,
} from "../../utils/fetch";
import { getActivePlotId, getSpecificationId } from "../plots/selector";
import { getFacetById } from "../specifications/selector.js";
import {
  getTrainingDataQueryBodyById,
  getModelDataQueryBodyById,
  getMarginalsQueryBodyById,
  getDensityQueryBodyById,
  getSelectedFieldObjectById,
  getPredictionQueryBodyId,
  getTrainingDataIntermediateModelQueryBodyById,
  getDataMarginalIntermediateModelQueryBodyById,
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

export function fetchModelDataSucess(id, modelDataPoints) {
  return {
    type: FETCH_MODEL_DATA_SUCCESS,
    payload: {
      id,
      modelDataPoints,
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

export function fetchModelXMarginalSuccess(id, x) {
  return {
    type: FETCH_MODEL_X_MARGINAL_SUCCESS,
    payload: {
      id,
      x,
    },
  };
}

export function fetchModelYMarginalSuccess(id, y) {
  return {
    type: FETCH_MODEL_Y_MARGINAL_SUCCESS,
    payload: {
      id,
      y,
    },
  };
}
export function fetchDataXMarginalSuccess(id, x) {
  return {
    type: FETCH_DATA_X_MARGINAL_SUCCESS,
    payload: {
      id,
      x,
    },
  };
}

export function fetchDataYMarginalSuccess(id, y) {
  return {
    type: FETCH_DATA_Y_MARGINAL_SUCCESS,
    payload: {
      id,
      y,
    },
  };
}

export function fetchModelDensitySuccess(id, modelDensity) {
  return {
    type: FETCH_MODEL_DENSITY_SUCCESS,
    payload: {
      id,
      modelDensity,
    },
  };
}

export function fetchDataDensitySuccess(id, dataDensity) {
  return {
    type: FETCH_DATA_DENSITY_SUCCESS,
    payload: {
      id,
      dataDensity,
    },
  };
}

export function fetchModelPredictionSuccess(id, modelPrediction) {
  return {
    type: FETCH_MODEL_PREDICTION_SUCCESS,
    payload: {
      id,
      modelPrediction,
    },
  };
}

export function fetchDataPredictionSuccess(id, dataPrediction) {
  return {
    type: FETCH_DATA_PREDICTION_SUCCESS,
    payload: {
      id,
      dataPrediction,
    },
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

export function fetchOnSpecChange() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    const facets = getFacetById(getState(), getSpecificationId(getState(), id));
    dispatch(fetchDataPending(id));
    if (facets["Data Points"].data === true) {
      dispatch(fetchTrainingDataPoints());
    }
    if (facets["Density"].data === true) {
      dispatch(fetchDataDensity());
    }
    if (facets["Marginals"].data === true) {
      dispatch(fetchDataMarginals());
    }
    if (facets["Prediction"].data === true) {
      dispatch(fetchDataPrediction());
    }
    if (facets["Data Points"].model === true) {
      dispatch(fetchModelDataPoints());
    }
    if (facets["Marginals"].model === true) {
      dispatch(fetchModelMarginals());
    }
    if (facets["Density"].model === true) {
      dispatch(fetchModelDensityData());
    }
    if (facets["Prediction"].model === true) {
      dispatch(fetchModelPrediction());
    }
  };
}

export function fetchModelPrediction() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const modelPredictionQueryBody = getPredictionQueryBodyId(
      getState(),
      "model",
      id
    );
    fetch2DPlotData(modelPredictionQueryBody).then((response) => {
      dispatch(fetchModelPredictionSuccess(id, response));
    });
  };
}

export function fetchDataPrediction() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const dataPredictionQueryBody = getPredictionQueryBodyId(
      getState(),
      "data",
      id
    );
    fetch2DPlotData(dataPredictionQueryBody).then((response) => {
      dispatch(fetchDataPredictionSuccess(id, response));
    });
  };
}

export function fetchDataDensity() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const dataDensityQueryBody = getDensityQueryBodyById(
      getState(),
      "data",
      id
    );
    fetch3DPlotData(dataDensityQueryBody).then((response) => {
      dispatch(fetchDataDensitySuccess(id, response));
    });
  };
}
export function fetchModelDensityData() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const modelDensityQueryBody = getDensityQueryBodyById(
      getState(),
      "model",
      id
    );
    fetch3DPlotData(modelDensityQueryBody).then((response) => {
      dispatch(fetchModelDensitySuccess(id, response));
    });
  };
}

export function fetchModelMarginals() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    const fieldItems = getSelectedFieldObjectById(getState(), id);
    dispatch(fetchDataPending(id));
    if (fieldItems.x) {
      const modelMarginalsQueryBody = getMarginalsQueryBodyById(
        getState(),
        "model",
        fieldItems.x,
        id
      );
      fetch1DPlotData(modelMarginalsQueryBody).then((response) => {
        dispatch(fetchModelXMarginalSuccess(id, response.a));
      });
    }

    if (fieldItems.y) {
      const modelMarginalsQueryBody = getMarginalsQueryBodyById(
        getState(),
        "model",
        fieldItems.y,
        id
      );
      fetch1DPlotData(modelMarginalsQueryBody).then((response) => {
        dispatch(fetchModelYMarginalSuccess(id, response.a));
      });
    }
  };
}
export function fetchDataMarginals() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    const fieldItems = getSelectedFieldObjectById(getState(), id);
    dispatch(fetchDataPending(id));
    const intermediateModelQueryBody = getDataMarginalIntermediateModelQueryBodyById(
      getState(),
      id
    );
    createIntermediateModels(intermediateModelQueryBody).then((response) => {});
    if (fieldItems.x) {
      const dataMarginalsQueryBody = getMarginalsQueryBodyById(
        getState(),
        "data",
        fieldItems.x,
        id
      );
      fetch1DPlotData(dataMarginalsQueryBody).then((response) => {
        dispatch(fetchDataXMarginalSuccess(id, response.a));
      });
    }

    if (fieldItems.y) {
      const dataMarginalsQueryBody = getMarginalsQueryBodyById(
        getState(),
        "data",
        fieldItems.y,
        id
      );
      fetch1DPlotData(dataMarginalsQueryBody).then((response) => {
        dispatch(fetchDataYMarginalSuccess(id, response.a));
      });
    }
  };
}

export function fetchTrainingDataPoints() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const intermediateModelQueryBody = getTrainingDataIntermediateModelQueryBodyById(
      getState(),
      id
    );
    createIntermediateModels(intermediateModelQueryBody).then((response) => {});
    const trainingDataQueryBody = getTrainingDataQueryBodyById(getState(), id);
    fetch2DPlotData(trainingDataQueryBody).then((response) => {
      dispatch(fetchTrainingDataSucess(id, response));
    });
  };
}

export function fetchModelDataPoints() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const modelDataQueryBody = getModelDataQueryBodyById(getState(), id);
    fetch2DPlotData(modelDataQueryBody).then((response) => {
      dispatch(fetchModelDataSucess(id, response));
    });
  };
}

export function fetchInitialStandardPlotData(id) {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const modelDataQueryBody = getModelDataQueryBodyById(getState(), id);
    const trainingDataQueryBody = getTrainingDataQueryBodyById(getState(), id);
    Promise.all([
      fetch2DPlotData(trainingDataQueryBody).then((payload) => {
        return payload;
      }),
      fetch2DPlotData(modelDataQueryBody).then((payload) => {
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
