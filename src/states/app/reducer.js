import { SELECT_MODEL, SAVE_MODELS } from "../../constants/actionType";

export const defaultState = {
  foundModels: ["model1", "model2", "model3"],
  currentModel: "model1"
};

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
