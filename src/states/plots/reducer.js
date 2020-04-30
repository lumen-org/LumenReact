import { UPDATE_PLOT_DATA } from "./constants";

export const defaultState = {
  plots: [],
};

const plotsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PLOT_DATA:
      return { plots: action.payload };

    default:
      return state;
  }
};

export default plotsReducer;
