import { GET_SPECIFICATION, GET_SCHEMA } from "../../constants/actionType";

export const defaultState = {
  schema: {},
  specification: {}
};

const modelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SCHEMA: {
      return {
        ...state,
        schema: state.models.concat(action.payload)
      };
    }

    default:
      return state;
  }
};

export default modelReducer;
