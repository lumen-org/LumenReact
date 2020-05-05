import { UPDATE_ACTIVE_MODEL } from "./constants";

export function updateActiveModel(payload) {
  return {
    type: UPDATE_ACTIVE_MODEL,
    payload,
  };
}
