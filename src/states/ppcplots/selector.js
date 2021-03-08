export const getPPCSpecificationId = (state, plotId) => {
  return state.plots.plots.byId[plotId].specificationId;
}

export const getPPCLoadingState = (state, id) => {
  return state.ppcplots.ppcplots[id].loading;
}

export const getPPCLayout = (state, id) => {
  return state.ppcplots.ppcplots[id]["layout"];
}

export const getPPCPlotData = (state, id) => {
  try {
    return state.ppcplots.ppcplots[id]["data"];
  }
  catch (e) {
    console.log("unsuccessful");
    return [];
  }


 // return [{x: [6.450294183181606, 5.338990172239377], type: 'histogram'}];
}
