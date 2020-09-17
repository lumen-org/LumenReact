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
  FETCH_TRAINING_DATA_ERROR,
  FETCH_DATA_DENSITY_SUCCESS,
  FETCH_DATA_DENSITY_ERROR,
  FETCH_MODEL_DENSITY_SUCCESS,
  FETCH_MODEL_DENSITY_ERROR,
  FETCH_INITIAL_PLOTDATA_SUCCESS,
  FETCH_INITIAL_PLOTDATA_ERROR,
  INITIALIZE_NEW_STANDARD_PLOT,
  DELETE_STANDARD_PLOT,
  FETCH_MODEL_PREDICTION_SUCCESS,
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
              modelDataPoints: {
                x: [],
                y: [],
              },
              trainingDataPoints: {
                x: [],
                y: [],
              },
              modelMarginals: {
                x: [],
                y: [],
              },
              dataMarginals: {
                x: [],
                y: [],
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
              trainingPrediction: {
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
              x: action.payload.x,
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
              y: action.payload.y,
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
              ...state.standardPlots[action.payload.id].modelMarginals,
              x: action.payload.x,
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
              ...state.standardPlots[action.payload.id].modelMarginals,
              y: action.payload.y,
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

    default:
      return state;
  }
};

export default standardPlots;
