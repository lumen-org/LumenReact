import { SELECT_MODEL, SAVE_MODELS } from "../constants/actionType";

export const defaultState = {
  models: [],
  currentModel: ""
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_MODELS: {
      return {
        ...state,
        models: state.models.concat(action.payload)
      };
    }
    default:
      return state;
  }
};

export default appReducer;
