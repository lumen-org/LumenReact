import { createSelector } from "reselect";

const getVis = state => state.visualizations.visualizations.byId;
const activeId = state => state.visualizations.activeVisualizationId;

export const selectCurrentModel = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== -1 ? selectVis[activeId] : {};
  }
);

export const selectActiveSpecificationId = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== -1 ? selectVis[activeId].specificationId : -1;
  }
);

export const selectActivePlotId = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== -1 ? selectVis[activeId].plotId : -1;
  }
);

export const selectActiveSchemeId = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== -1 ? selectVis[activeId].schemeId : -1;
  }
);

