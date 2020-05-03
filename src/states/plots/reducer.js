import {
  CREATE_NEW_PLOT,
  UPDATE_PLOT_SPECIFICATIONS,
  CHANGE_ACTIVE_PLOT,
  DELETE_PLOT,
} from "./constants";

import { nextActiveId, nextAvaliableId } from "../../utils/plotData";
export const defaultState = {
  plots: [],
  activePlotId: 1,
};

const plotsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_PLOT:
      return {
        ...state,
        plots: state.plots.map((plot) =>
          plot.id === action.payload.newActivePlotId
            ? {
                ...plot,
                zIndex: 1000,
              }
            : {
                ...plot,
                zIndex: 0,
              }
        ),
        activePlotId: action.payload.newActivePlotId,
      };

    case CREATE_NEW_PLOT:
      var newId = nextAvaliableId(state.plots);
      return {
        ...state,
        plots: [
          ...state.plots,
          {
            id: newId,
            model: action.payload.modelName,
            specifications: {
              X_Axis: new Set([]),
              Y_Axis: new Set([]),
              Filter: new Set([]),
              Detail: new Set([]),
              Color: new Set([]),
              Shape: new Set([]),
              Size: new Set([]),
            },
            zIndex: 0,
            plotData: [],
            layout: {},
            show: true,
          },
        ],
        activePlotId: newId,
      };

    case UPDATE_PLOT_SPECIFICATIONS:
      return {
        ...state,
        plots: state.plots.map((plot) =>
          plot.id === action.payload.id
            ? {
                ...plot,
                specifications: action.payload.newSpecifications,
              }
            : plot
        ),
      };
    case DELETE_PLOT:
      return {
        ...state,
        plots: state.plots.map((plot) =>
          plot.id === action.payload.id
            ? {
                id: plot.id,
                show: false,
                zIndex: 0,
              }
            : plot
        ),
        activePlotId: nextActiveId(state.plots, action.payload.id),
      };
    default:
      return state;
  }
};

export default plotsReducer;
