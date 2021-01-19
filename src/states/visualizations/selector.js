import { createSelector } from "reselect";
import { EMPTY } from "../constants";

const getVis = (state) => state.visualizations.visualizations.byId;
const activeId = (state) => state.visualizations.activeVisualizationId;

export const getPlotIdByVisId = (state, visId) => {
  return state.visualizations.visualizations.byId[visId].plotId;
};

export const selectCurrentModel = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== EMPTY ? selectVis[activeId] : {};
  }
);

export const selectActiveSpecificationId = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== EMPTY ? selectVis[activeId].specificationId : EMPTY;
  }
);

export const selectActivePlotId = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== EMPTY ? selectVis[activeId].plotId : EMPTY;
  }
);

export const selectActivePlotType = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== EMPTY ? selectVis[activeId].plotType : EMPTY;
  }
);

export const selectActiveModelId = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== EMPTY ? selectVis[activeId].modelId : EMPTY;
  }
);

export const getLastCreatedVisualizationId = (state) => {
  return state.visualizations.lastCreatedVisualizationId;
};

export const hasAnotherVisualizationWithSameModelId = (state) => {
  const activeModelId = state.visualizations.visualizations.byId[activeId(state)].modelId;
  //console.log("activeModelId ", activeModelId);
  for (let vis in getVis(state)){
    //console.log("state.visualizations.visualizations.byId[vis].modelId ", state.visualizations.visualizations.byId[vis].modelId);
    //console.log("activeId(state) ", activeId(state));
    //console.log("vis ", vis);
    if (state.visualizations.visualizations.byId[vis].modelId === activeModelId && vis !== activeId(state)) {
      return true;
    }
  }
  return false;
}