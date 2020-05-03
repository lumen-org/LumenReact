import {
  CREATE_NEW_PLOT,
  UPDATE_PLOT_SPECIFICATIONS,
  CHANGE_ACTIVE_PLOT,
} from "./constants";

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
            : plot.id === state.activePlotId
            ? {
                ...plot,
                zIndex: 0,
              }
            : {
                plot,
              }
        ),
        activePlotId: action.payload.newActivePlotId,
      };

    case CREATE_NEW_PLOT:
      return {
        ...state,
        plots: [
          ...state.plots,
          {
            id: state.plots.length + 1,
            model: action.payload.modelName,
            specifications: action.payload.specifications,
            zIndex: 0,
            plotData: [],
            layout: {},
            show: true,
          },
        ],
        activePlotId: state.plots.length + 1,
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

    default:
      return state;
  }
};

export default plotsReducer;
