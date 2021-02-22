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
          const data = results["test"];
          const n = data[0].length;
          const vals = data[0].sort();
          const min = vals[0];
          const max = Math.round(vals[n-1]);
          console.log(n, min ,max);
          //const size = (max-min)/n;
          const values = {
            data: [{
              x: data[0],
              type: 'histogram',
              name: "ppc values",
              marker: {
                line: {
                  width: 1
                }
              },
              xbins: {
                start: min,
                end: max,
                //size: size,
              }
            },
              /*{
              type: 'scatter',
              x: [results.reference[0], results.reference[0]],
              y: [2, 0],
              name: "reference",
              width: "10px",
              marker: {
                line: {
                  width: 1,
                }
              }
            },*/
            ]
          };
          dispatch(addDataToPPCPlot(id, JSON.parse(JSON.stringify(values))))
          const layout = {
            shapes: [{
              type: "line",
              x0: results.reference[0],
              y0: 0,
              x1: results.reference[0],
              yref: 'paper',
              y1: 1,
              name: "reference",
              line: {
                color: 'orange',
                width: 1.5,

              }
            }]
          }
          dispatch(addDataToPPCPlot(id, {reference: results.reference[0]}));
          dispatch(changePPCPlot(id, {layout: layout}));
        }}).then(dispatch(changePPCPlot(id, {loading: false}))

      );
    }
  }
