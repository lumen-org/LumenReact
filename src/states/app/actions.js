import { SELECT_MODEL, SAVE_MODELS } from "../../constants/actionType";

export function saveModels(payload) {
  return {
    type: SAVE_MODELS,
    payload
  };
}

export function selectModel(payload) {
  return {
    type: SELECT_MODEL,
    payload
  };
}
