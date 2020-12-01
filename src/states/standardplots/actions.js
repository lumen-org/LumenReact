import {
  FETCH_DATA_PENDING,
  FETCH_MODEL_X_MARGINAL_SUCCESS,
  FETCH_MODEL_Y_MARGINAL_SUCCESS,
  FETCH_DATA_X_MARGINAL_SUCCESS,
  FETCH_DATA_Y_MARGINAL_SUCCESS,
  FETCH_MODEL_DATA_SUCCESS,
  FETCH_TRAINING_DATA_SUCCESS,
  FETCH_DATA_DENSITY_SUCCESS,
  FETCH_MODEL_DENSITY_SUCCESS,
  FETCH_INITIAL_PLOTDATA_SUCCESS,
  FETCH_CATEGORIES,
  FETCH_DATA_PREDICTION_SUCCESS,
  FETCH_MODEL_PREDICTION_SUCCESS,
  INITIALIZE_NEW_STANDARD_PLOT,
  DELETE_STANDARD_PLOT,
} from "./constants";

import { getPlotAllIds } from "../plots/selector";
import { getModelNameById } from "../models/selector";

import { nextAvaliableId } from "../../utils/plotData";
import { fetch3DPlotData, fetch2DPlotData } from "../../utils/fetch";
import { getActivePlotId, getSpecificationId } from "../plots/selector";
import { marginalizeModel } from "../../utils/pqlModelQueries";
import {
  getFacetById,
  getSpecById,
  getColorCatgeoryById,
} from "../standardspecifications/selector.js";
import {
  getMarginalsQueryBodyById,
  getDensityQueryBodyById,
  getSelectedFieldObjectById,
  getPredictionQueryBodyId,
  getSelectedFieldArrayById,
} from "./utils";

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

export function updateCategories(id, categories) {
  return {
    type: FETCH_CATEGORIES,
    payload: {
      id: id,
      categories: categories,
    },
  };
}

export function fetchCatgetories(fieldItems) {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    const mcgModelName = getModelNameById(getState(), id);
    marginalizeModel(
      mcgModelName,
      fieldItems,
      mcgModelName + "_data_marginal"
    ).then((response) => {
      console.log(response.fields[0].extent);
      dispatch(updateCategories(id, response.fields[0].extent));
    });
  };
}

/**
 * derive a list of submodels for faster queries
 */
export function deriveSubmodelsOnSpecChange() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    const mcgModelName = getModelNameById(getState(), id);
    const fieldsArray = getSelectedFieldArrayById(getState(), id);
    const empModelName = "emp_" + mcgModelName.split("_")[1];
    marginalizeModel(
      mcgModelName,
      fieldsArray,
      mcgModelName + "_data_marginal"
    ).then((response) => {});
    marginalizeModel(
      empModelName,
      fieldsArray,
      empModelName + "_data_marginal"
    ).then((response) => {});
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
      fetch2DPlotData(modelMarginalsQueryBody).then((response) => {
        dispatch(fetchModelXMarginalSuccess(id, response));
      });
    }

    if (fieldItems.y) {
      const modelMarginalsQueryBody = getMarginalsQueryBodyById(
        getState(),
        "model",
        fieldItems.y,
        id
      );
      fetch2DPlotData(modelMarginalsQueryBody).then((response) => {
        dispatch(fetchModelYMarginalSuccess(id, response));
      });
    }
  };
}
export function fetchDataMarginals() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    const fieldItems = getSelectedFieldObjectById(getState(), id);
    dispatch(fetchDataPending(id));
    if (fieldItems.x) {
      const dataMarginalsQueryBody = getMarginalsQueryBodyById(
        getState(),
        "data",
        fieldItems.x,
        id
      );
      fetch2DPlotData(dataMarginalsQueryBody).then((response) => {
        dispatch(fetchDataXMarginalSuccess(id, response));
      });
    }

    if (fieldItems.y) {
      const dataMarginalsQueryBody = getMarginalsQueryBodyById(
        getState(),
        "data",
        fieldItems.y,
        id
      );
      fetch2DPlotData(dataMarginalsQueryBody).then((response) => {
        dispatch(fetchDataYMarginalSuccess(id, response));
      });
    }
  };
}

export function fetchTrainingDataPoints() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const modelName = getModelNameById(getState(), id);
    const fieldItems = getSelectedFieldArrayById(getState(), id);

    const trainingDataQueryBody = {
      FROM: modelName,
      SELECT: fieldItems,
      OPTS: {
        data_category: "training data",
        data_point_limit: 2000,
      },
    };

    fetch2DPlotData(trainingDataQueryBody).then((response) => {
      dispatch(fetchTrainingDataSucess(id, response));
    });
  };
}

export function fetchModelDataPoints() {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    const modelName = getModelNameById(getState(), id);
    const fieldItems = getSelectedFieldArrayById(getState(), id);
    const colorSpec = getColorCatgeoryById(getState(), id);
    if (colorSpec.length !== 0) {
      fieldItems.push(colorSpec[0]);
      dispatch(fetchCatgetories(fieldItems));
    }
    dispatch(fetchDataPending(id));
    const modelDataQueryBody = {
      FROM: modelName,
      OPTS: {
        data_category: "model samples",
        data_point_limit: 2000,
        number_of_samples: 200,
      },
      SELECT: fieldItems,
    };
    fetch2DPlotData(modelDataQueryBody).then((response) => {
      dispatch(fetchModelDataSucess(id, response));
    });
  };
}

export function fetchInitialStandardPlotData(id) {
  return (dispatch, getState) => {
    const id = getActivePlotId(getState());
    dispatch(fetchDataPending(id));
    const modelName = getModelNameById(getState(), id);
    const fieldItems = getSelectedFieldArrayById(getState(), id);
    const modelDataQueryBody = {
      FROM: modelName,
      OPTS: {
        data_category: "model samples",
        data_point_limit: 2000,
        number_of_samples: 200,
      },
      SELECT: fieldItems,
    };
    const trainingDataQueryBody = {
      FROM: modelName,
      SELECT: fieldItems,
      OPTS: {
        data_category: "training data",
        data_point_limit: 2000,
      },
    };
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
