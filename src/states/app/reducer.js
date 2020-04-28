import { SELECT_MODEL, SAVE_MODELS } from "../../constants/actionType";

export const defaultState = {
  currentModel: "mcg_iris_map",
};
// TODO: add a check for default model.
const app = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_MODEL: {
      return {
        ...state,
        currentModel: action.payload,
      };
    }

    default:
      return state;
  }
};

export default app;
