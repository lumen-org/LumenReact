import { CREATE_NEW_PPC_PLOT, DELETE_PPC_PLOT } from "./constants";
import { getPlotAllIds } from "../plots/selector";
import { nextAvaliableId } from "../../utils/plotData";


export function _createNewPPCPlot(id) {
  return {
    type: CREATE_NEW_PPC_PLOT,
    payload: {
      id: id,
    },
  };
}
export function createNewPPCPlot() {
  return (dispatch, getState) => {
    const allIds = getPlotAllIds(getState());
    const newId = nextAvaliableId(allIds);
    console.log(newId);
    dispatch(_createNewPPCPlot(newId));
  };
}

export function deletePPCPlot(id) {
  return {
    type: DELETE_PPC_PLOT,
    payload: {
      id: id,
    },
  };
}