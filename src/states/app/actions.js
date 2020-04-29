import { SELECT_MODEL } from "../../constants/actionType";

export function selectModel(payload) {
  return {
    type: SELECT_MODEL,
    payload,
  };
}
