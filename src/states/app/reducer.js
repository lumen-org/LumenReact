import { SELECT_MODEL, SAVE_MODELS } from "../../constants/actionType";

export const defaultState = {
  foundModels: [],
  currentModel: "mcg_iris_map"
};
// TODO: add a check for default model.
const app = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_MODELS: {
      return {
        ...state,
        foundModels: state.models.concat(action.payload)
      };
    }

    case SELECT_MODEL: {
      return {
        ...state,
        currentModel: action.payload
      };
    }

    default:
      return state;
  }
};

export default app;
