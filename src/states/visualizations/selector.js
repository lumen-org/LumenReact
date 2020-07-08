import { createSelector } from "reselect";
import { EMPTY } from "../constants";

const getVis = (state) => state.visualizations.visualizations.byId;
const activeId = (state) => state.visualizations.activeVisualizationId;


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

export const selectActiveModelId = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== EMPTY ? selectVis[activeId].modelId : EMPTY;
  }
);
