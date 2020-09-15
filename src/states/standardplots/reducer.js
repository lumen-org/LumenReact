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
              modelData: {
                x: [],
                y: [],
              },
              trainingDataPoints: {
                x: [],
                y: [],
              },
              training: {
                x: [],
                y: [],
              },
              model: {
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

    case FETCH_TRAINING_DATA_PENDING:
      return {
        ...state,
        standardPlots: {
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
        standardPlots: update(state.standardPlots, {
          [action.payload.id]: {
            $merge: action.payload.newStandardPlotData,
          },
        }),
      };

    default:
      return state;
  }
};

export default standardPlots;
