import { SELECT_MODEL } from "./constants";

export const defaultState = {
  activeModel: "mcg_iris_map",
};
// TODO: add a check for default model.
const app = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_MODEL: {
      return {
        ...state,
        activeModel: action.payload,
      };
    }

    default:
      return state;
  }
};

export default app;
