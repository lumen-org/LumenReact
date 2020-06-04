import {
  CREATE_NEW_PLOT,
  UPDATE_PLOT_SPECIFICATIONS,
  CHANGE_ACTIVE_PLOT,
  DELETE_PLOT
} from "./constants";

import update from "immutability-helper";
import { nextActiveId, nextAvaliableId } from "../../utils/plotData";

export const defaultState = {
  plots: {
    byId: {},
    allIds: []
  },
  activePlotId: -1,
  lastCreatedId: -1
};

const plotsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_PLOT:
       // = Object.assign({}, state.plots.byId);
      let plots = Object.keys(state.plots.byId).map((key) =>
        state.plots.byId[key].id === action.payload.newActivePlotId
          ? {
            ...state.plots.byId[key],
            zIndex: 1
          }
          : {
            ...state.plots.byId[key],
            zIndex: 0
          });
      return {
        ...state,
        plots: update(state.plots, {
            byId: {$set: plots}
        }),
        activePlotId: action.payload.newActivePlotId
      };

    case CREATE_NEW_PLOT:
      const newId = nextAvaliableId(state.plots.allIds);
      return {
        ...state,
        plots: {
          byId: update(state.plots.byId,
            {
              [newId]: {
                $set: {
                  id: newId,
                  model: action.payload.modelName,
                  specifications: action.payload.specification_id,
                  zIndex: 0,
                  plotData: [],
                  layout: {},
                  show: true
                }
              }
            }),
          allIds: [...state.plots.allIds, newId]
        },
        activePlotId: newId,
        lastCreatedId: newId
      };

    case DELETE_PLOT:
      return {
        ...state,
        plots: update(state.plots, { byId: { $unset: [action.payload.id] } }),
        activePlotId: nextActiveId(state.plots.allIds)
      };
    default:
      return state;
  }
};

export default plotsReducer;
