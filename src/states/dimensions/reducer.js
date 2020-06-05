import { CREATE_NEW_DIMENSION } from "./constants";

const defaultState = {
  dimensions: {}
};

const dimensions = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_DIMENSION:
      return {
        ...state,
        action
      };
    default:
      return state;
  }
};

export default dimensions;