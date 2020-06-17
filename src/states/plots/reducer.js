import {
  CREATE_NEW_PLOT,
  CHANGE_ACTIVE_PLOT,
  DELETE_PLOT,
  UPDATE_PLOT_DATA,
  RESET_PLOT_DATA,
  UPDATE_PLOT_LAYOUT,
} from "./constants";

import update from "immutability-helper";
import { nextActiveId, nextAvaliableId } from "../../utils/plotData";

export const defaultState = {
  plots: {
    byId: {},
    allIds: [],
  },
  activePlotId: -1,
  lastCreatedId: -1,
};

const plotsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_PLOT:
      let plots = Object.keys(state.plots.byId).map((key) =>
        state.plots.byId[key].id === action.payload.newid
          ? {
              ...state.plots.byId[key],
              zIndex: 1,
            }
          : {
              ...state.plots.byId[key],
              zIndex: 0,
            }
      );
      return {
        ...state,
        plots: update(state.plots, {
          byId: { $set: plots },
        }),
        activePlotId: action.payload.newid,
      };

    case CREATE_NEW_PLOT:
      const newId = nextAvaliableId(state.plots.allIds);
      return {
        ...state,
        plots: {
          byId: update(state.plots.byId, {
            [newId]: {
              $set: {
                id: newId,
                model: action.payload.modelName,
                specifications: action.payload.specification_id,
                zIndex: 0,
                plotData: [],
                layout: {},
                show: true,
              },
            },
          }),
          allIds: [...state.plots.allIds, newId],
        },
        activePlotId: newId,
        lastCreatedId: newId,
      };

    case UPDATE_PLOT_DATA:
      return {
        ...state,
        plots: {
          ...state.plots,
          byId: update(state.plots.byId, {
            [action.payload.id]: {
              $merge: {
                plotData: [
                  ...state.plots.byId[action.payload.id].plotData,
                  action.payload.newPlotData,
                ],
              },
            },
          }),
        },
      };

    case UPDATE_PLOT_LAYOUT:
      return {
        ...state,
        plots: {
          ...state.plots,
          byId: update(state.plots.byId, {
            [action.payload.id]: {
              $merge: {
                layout: action.payload.newLayout,
              },
            },
          }),
        },
      };

    case RESET_PLOT_DATA:
      return {
        ...state,
        plots: {
          ...state.plots,
          byId: update(state.plots.byId, {
            [action.payload.id]: {
              $merge: {
                plotData: [],
              },
            },
          }),
        },
      };

    case DELETE_PLOT:
      return {
        ...state,
        plots: update(state.plots, { byId: { $unset: [action.payload.id] } }),
        activePlotId: nextActiveId(state.plots.allIds),
      };
    default:
      return state;
  }
};

export default plotsReducer;
