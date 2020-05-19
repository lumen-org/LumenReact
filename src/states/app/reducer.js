import { UPDATE_ACTIVE_MODEL } from "./constants";

export const defaultState = {
  activeModel: "mcg_iris_map",
  activePlots: undefined,
  activeSpecification: undefined,
};
// TODO: add a check for default specifications.
const app = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_MODEL: {
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
