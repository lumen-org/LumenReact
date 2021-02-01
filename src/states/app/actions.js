import { UPDATE_ACTIVE_MODEL } from "./constants";
import { getModelNameOfActivePlotId } from "../plots/selector";

export function updateActiveModel(activeModelName) {
  return {
    type: UPDATE_ACTIVE_MODEL,
    payload: {
      activeModelName: activeModelName,
    },
  };
}

export function _updateActiveModel() {
  return (dispatch, getState) => {
    const activeModelName = getModelNameOfActivePlotId(getState());
    dispatch(updateActiveModel(activeModelName));
  }
}
