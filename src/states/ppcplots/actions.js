import {
  ADD_DATA_TO_PPC_PLOT,
  CHANGE_PPC_PLOT,
  CHANGE_PPC_PLOT_LAYOUT,
  CREATE_NEW_PPC_PLOT,
  DELETE_PPC_PLOT
} from "./constants";
import { getPlotAllIds} from "../plots/selector";
import { nextAvaliableId } from "../../utils/plotData";
import { fetchPPCData } from "../../utils/fetch";



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

export const addDataToPPCPlot = (id, x, min, max) => {
  return {
    type: ADD_DATA_TO_PPC_PLOT,
    payload: {
      id: id,
      x: x,
      min: min,
      max: max,
    },
  };
}

export const changePPCPlot = (id, values) => {
  return {
    type: CHANGE_PPC_PLOT,
    payload: {
      id: id,
      values: values
    }
  }
}

export const addLayoutToPPCPlot = (id, x_vals) => {
  return {
    type: CHANGE_PPC_PLOT_LAYOUT,
    payload: {
      id: id,
      x_vals: x_vals,
    }
  }
}
  /**
   * Gets PPC Plot data from backend
   * @param modelname: model name
   * @param id ppcspecification id
   * @param k
   * @param n
   * @param statistic
   * @param selectedFields
   * @returns {function(*, *): void}
   */
  export function fetchPPCPlotData(modelname, id, k, n, statistic, selectedFields) {
    return (dispatch, getState) => {
      dispatch(changePPCPlot(id,{loading: true}));
      console.log(selectedFields);
      fetchPPCData(modelname, selectedFields, statistic, k, n).then(
        (results) => {console.log(results, "results");
        if (results !== null) {
          console.log(results);
          const data = results["test"];
          const n = data[0].length;
          const vals = data[0].sort();
          const min = Math.floor(vals[0]);
          const max = Math.ceil(vals[n-1]);
          dispatch(addDataToPPCPlot(id, data[0], min, max));
          const reference =  results.reference[0];
          console.log(reference);
          dispatch(changePPCPlot(id, {reference: reference}));
          dispatch(addLayoutToPPCPlot(id, reference));
        }}).then(dispatch(changePPCPlot(id, {loading: false}))

      );
    }
  }
