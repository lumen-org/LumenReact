import { CREATE_NEW_PLOT, UPDATE_PLOT_SPECIFICATIONS } from "./constants";

export const defaultState = {
  plots: [],
  activePlotId: 1,
};

const plotsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_PLOT:
      return {
        ...state,
        plots: [
          ...state.plots,
          {
            id: state.plots.length + 1,
            model: action.payload.modelName,
            specifications: action.payload.specifications,
            plotData: [],
            layout: {},
            show: true,
          },
        ],
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
