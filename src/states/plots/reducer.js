import {
  CREATE_NEW_PLOT,
  UPDATE_PLOT_SPECIFICATIONS,
  CHANGE_ACTIVE_PLOT,
  DELETE_PLOT
} from "./constants";

import update from "immutability-helper";
import { nextActiveId, nextAvaliableId } from "../../utils/plotData";
import { PlotStack } from "../../utils/PlotStack";

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
      const newAllIds = PlotStack.moveToTop(state.plots.allIds, action.payload.newActivePlotId)
      newAllIds.map((elem, index) => state.plots.byId[elem].zIndex = index)
      return {
        ...state,
        plots: update(state.plots, {
          byId: { $set: Object.assign({}, state.plots.byId) },
          allIds: { $set: newAllIds }
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
          allIds: PlotStack.push(state.plots.allIds, newId)
        },
        activePlotId: newId,
        lastCreatedId: newId
      };

    case DELETE_PLOT:
      const allIds = PlotStack.pop(state.plots.allIds)
      return {
        ...state,
        plots: update(state.plots, { 
          byId: { $unset: [action.payload.id] }, 
          allIds: {$set: allIds}
        }),
        activePlotId: PlotStack.peek(state.plots.allIds)
      };
    default:
      return state;
  }
};

export default plotsReducer;
