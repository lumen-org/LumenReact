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
  FETCH_DATA_PREDICTION_SUCCESS,
  INITIALIZE_NEW_STANDARD_PLOT,
  DELETE_STANDARD_PLOT,
  FETCH_MODEL_PREDICTION_SUCCESS,
  FETCH_CATEGORIES,
} from "./constants";
import update from "immutability-helper";

/*
maintains all existing standardPlots and their state
 */

export const defaultState = {
  standardPlots: {},
};

const standardPlots = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_NEW_STANDARD_PLOT:
      const { id } = action.payload;

      return {
        ...state,
        standardPlots: update(state.standardPlots, {
          [id]: {
            $set: {
              loading: false,
              categories: [],
              modelDataPoints: {
                x: [],
                y: [],
              },
              trainingDataPoints: {
                x: [],
                y: [],
              },
              modelMarginals: {
                xAxis: { x: [], y: [] },
                yAxis: { x: [], y: [] },
              },
              dataMarginals: {
                xAxis: { x: [], y: [] },
                yAxis: { x: [], y: [] },
              },
              modelDensity: {
                x: [],
                y: [],
                z: [],
              },
              dataDensity: {
                x: [],
                y: [],
                z: [],
              },
              dataPrediction: {
                x: [],
                y: [],
              },
              modelPrediction: {
                x: [],
                y: [],
              },
            },
          },
        }),
      };

    case DELETE_STANDARD_PLOT:
      return {
        ...state,
        standardPlots: update(state.standardPlots, {
          $unset: [action.payload.id],
        }),
      };

    case FETCH_DATA_PENDING:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: true,
          },
        },
      };

    case FETCH_TRAINING_DATA_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            trainingDataPoints: action.payload.trainingDataPoints,
          },
        },
      };

    case FETCH_MODEL_DATA_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            modelDataPoints: action.payload.modelDataPoints,
          },
        },
      };
    case FETCH_MODEL_X_MARGINAL_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            modelMarginals: {
              ...state.standardPlots[action.payload.id].modelMarginals,
              xAxis: action.payload.x,
            },
          },
        },
      };

    case FETCH_MODEL_Y_MARGINAL_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            modelMarginals: {
              ...state.standardPlots[action.payload.id].modelMarginals,
              yAxis: action.payload.y,
            },
          },
        },
      };

    case FETCH_DATA_X_MARGINAL_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            dataMarginals: {
              ...state.standardPlots[action.payload.id].dataMarginals,
              xAxis: action.payload.x,
            },
          },
        },
      };

    case FETCH_DATA_Y_MARGINAL_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            dataMarginals: {
              ...state.standardPlots[action.payload.id].dataMarginals,
              yAxis: action.payload.y,
            },
          },
        },
      };
    case FETCH_MODEL_DENSITY_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            modelDensity: action.payload.modelDensity,
          },
        },
      };

    case FETCH_MODEL_PREDICTION_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            modelPrediction: action.payload.modelPrediction,
          },
        },
      };

    case FETCH_DATA_PREDICTION_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            dataPrediction: action.payload.dataPrediction,
          },
        },
      };
    case FETCH_DATA_DENSITY_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            dataDensity: action.payload.dataDensity,
          },
        },
      };

    case FETCH_INITIAL_PLOTDATA_SUCCESS:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            loading: false,
            modelDataPoints: action.payload.newStandardPlotData.model,
            trainingDataPoints:
              action.payload.newStandardPlotData.trainingDataPoints,
          },
        },
      };

    case FETCH_CATEGORIES:
      return {
        ...state,
        standardPlots: {
          ...state.standardPlots,
          [action.payload.id]: {
            ...state.standardPlots[action.payload.id],
            categories: action.payload.categories,
          },
        },
      };
    default:
      return state;
  }
};

export default standardPlots;
