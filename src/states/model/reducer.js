import { SELECT_MODEL, SAVE_MODELS } from "../../constants/actionType";

export const defaultState = {
  foundModels: ["model1", "model2", "model3"],
  currentModel: "model1"
};

const modelReducer = (state = defaultState, action) => {
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

export default modelReducer;
