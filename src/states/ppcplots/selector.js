export const getPPCSpecificationId = (state, plotId) => {
  return state.plots.plots.byId[plotId].specificationId;
}

export const getPPCLoadingState = (state, id) => {
  return state.ppcplots.ppcplots[id].loading;
}

export const getPPCLayout = (state, id) => {
  const data = state.ppcplots.ppcplots[id]["test"];
  console.log(data, "data");
  if (data != null) {
    const n = data[0].length;
    const vals = data[0].sort();
    const min = vals[0];
    const max = vals[n - 1];
    console.log(n, min, max);
    const size = (max - min) / n;
  }
  return state.ppcplots.ppcplots[id]["layout"];
}

export const getPPCPlotData = (state, id) => {
  try {
    const result = state.ppcplots.ppcplots[id]["data"];
    console.log(result);
    return result;
  }
  catch (e) {
    console.log("unsuccessful");
    return [];
  }


 // return [{x: [6.450294183181606, 5.338990172239377], type: 'histogram'}];
}
