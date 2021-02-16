import { ADD_DATA_TO_PPC_PLOT, CHANGE_PPC_PLOT, CREATE_NEW_PPC_PLOT, DELETE_PPC_PLOT } from "./constants";
import { getPlotAllIds, getSpecificationId } from "../plots/selector";
import { nextAvaliableId } from "../../utils/plotData";
import { getParameter } from "../ppcspecification/selector";
import { fetchPPCData } from "../../utils/fetch";
import { addToPPCSpecification } from "../ppcspecification/actions";


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

export const addDataToPPCPlot = (id, results) => {
  return {
    type: ADD_DATA_TO_PPC_PLOT,
    payload: {
      id: id,
      results: results,
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
  /**
   * Gets PPC Plot data from backend
   * @param modelname: model name
   * @param id ppcspecification id
   * @param k
   * @param n
   * @param statistic
   * @returns {function(*, *): void}
   */
  export function fetchPPCPlotData(modelname, id, k, n, statistic) {
    return (dispatch, getState) => {
      dispatch(changePPCPlot(id,{loading: true}));
      fetchPPCData(modelname, ["sepal_length"], statistic, k, n).then(
        (results) => {console.log(results, "results");
        if (results !== null) {
          dispatch(addDataToPPCPlot(id, JSON.parse(JSON.stringify(results))))
        }}).then(dispatch(changePPCPlot(id, {loading: false}))

      );
    }
  }
