import { UPDATE_ACTIVE_MODEL } from "./constants";
import { getModelNameOfActivePlotId } from "../plots/selector";

export function updateActiveModel(payload) {
  return {
    type: UPDATE_ACTIVE_MODEL,
    payload,
  };
}

export function _updateActiveModel() {
  return (dispatch, getState) => {
    const activeModel = getModelNameOfActivePlotId(getState());
    dispatch(updateActiveModel(activeModel));
  }
}
