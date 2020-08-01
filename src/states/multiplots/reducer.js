import {
  UPDATE_MULTI_PLOT_DATA,
  RESET_MULTI_PLOT_DATA,
  UPDATE_PLOT_LAYOUT,
  INITIALIZE_NEW_MULTI_PLOT,
  DELETE_MULTI_PLOT,
} from "./constants";

import update from "immutability-helper";

export const defaultState = {
  multiPlots: {},
  layout: {},
  status: "ok",
};

const multiplots = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_NEW_MULTI_PLOT:
      const { id } = action.payload;

      return {
        ...state,
        multiPlots: update(state.multiPlots, {
          [id]: {
            $set: [],
          },
        }),
        layout: update(state.layout, {
          [id]: {
            $set: [],
          },
        }),
      };

    case DELETE_MULTI_PLOT:
      return {
        ...state,
        multiPlots: update(state.multiPlots, {
          $unset: [action.payload.id],
        }),
        layout: update(state.layout, {
          $unset: [action.payload.id],
        }),
      };

    case UPDATE_MULTI_PLOT_DATA:
      return {
        ...state,
        multiPlots: update(state.multiPlots, {
          [action.payload.id]: {
            $merge: [
              ...state.multiPlots[action.payload.id],
              action.payload.newPlotData,
            ],
          },
        }),
      };

    case UPDATE_PLOT_LAYOUT:
      return {
        ...state,
        layout: update(state.layout, {
          [action.payload.id]: {
            $set: action.payload.newLayout,
          },
        }),
      };

    case RESET_MULTI_PLOT_DATA:
      return {
        ...state,
        multiPlots: update(state.multiPlots, {
          [action.payload.id]: {
            $set: [],
          },
        }),
      };
    default:
      return state;
  }
};

export default multiplots;
