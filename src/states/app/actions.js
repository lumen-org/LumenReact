import { SELECT_MODEL } from "./constants";

export function selectModel(payload) {
  return {
    type: SELECT_MODEL,
    payload,
  };
}
