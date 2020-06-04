import { CREATE_NEW_DIMENSION } from "./constants";

const defaultState = {
  alleHaendeHoch: -1
};

const dimensions = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_DIMENSION:
      return state;
    default:
      return state;
  }
};

export default dimensions;