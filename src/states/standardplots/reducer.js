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
  CREATE_NEW_STANDARD_PLOT,
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
    case CREATE_NEW_STANDARD_PLOT:
      const { id } = action.payload;

      return {
        ...state,
        standardPlots: update(state.standardPlots, {
          [id]: {
            $set: {
              id: id,
              trainingScatterData: {
                x: [],
                y: [],
              },
              modelScatterData: {
                x: [],
                y: [],
              },
            },
          },
        }),
      };

    default:
      return state;
  }
};

export default standardPlots;
