import { SELECT_MODEL, SAVE_MODELS } from "../constants/actionType";
import { combineReducers } from "redux";
import modelReducer from "./model/modelReducer";

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

const rootReducer = combineReducers({ app: appReducer, model: modelReducer });
export default rootReducer;
