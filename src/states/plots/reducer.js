import {
  CREATE_NEW_PLOT,
  UPDATE_PLOT_SPECIFICATIONS,
  CHANGE_ACTIVE_PLOT,
  DELETE_PLOT
} from "./constants";

import { nextActiveId, nextAvaliableId } from "../../utils/plotData";

export const defaultState = {
  plots: {
    byId: [],
    allIds: []
  },
  activePlotId: -1,
  lastCreatedId: -1
};

const plotsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_PLOT:
      return {
        ...state,
        plots: {
          byId: state.plots.byId.map((plot) =>
            plot.id === action.payload.newActivePlotId
              ? {
                ...plot,
                zIndex: 1000
              }
              : {
                ...plot,
                zIndex: 0
              }
          ),
          allIds: [...state.plots.allIds]
        },
        activePlotId: action.payload.newActivePlotId
      };

    case CREATE_NEW_PLOT:
      const newId = nextAvaliableId(state.plots.allIds);
      return {
        ...state,
        plots: {
          byId: [ ...state.plots.byId,
            {
              id: newId,
              model: action.payload.modelName,
              specifications: action.payload.specification_id,
              zIndex: 0,
              plotData: [],
              layout: {},
              show: true
            }],
          allIds: [...state.plots.allIds, newId]
        },
        activePlotId: newId,
        lastCreatedId: newId
      };

    case UPDATE_PLOT_SPECIFICATIONS:
      return {
        ...state,
        plots: state.plots.byId.map((plot) =>
          plot.id === action.payload.id
            ? {
              ...plot
              // specifications: action.payload.newSpecification_id,
            }
            : plot
        )
      };
    case DELETE_PLOT:
      return {
        ...state,
        plots: {
          byId: state.plots.byId.map((plot) =>
          plot.id === action.payload.id
            ? {
              id: plot.id,
              show: false,
              zIndex: 0
            }
            : plot
        ),
          allIds: [...state.plots.allIds]
        },
        activePlotId: nextActiveId(state.plots.allIds)
      }
    default:
      return state;
  }
};

export default plotsReducer;
