import { createSelector } from "reselect";

const getVis = (state) => state.visualizations.visualizations.byId;
const activeId = (state) => state.visualizations.activeVisualizationId;

export const getCurrentModel = (state) => {
  return selectCurrentModel(state).modelName || "";
};

export const getModelNameById = (state, id) => {
  return state.visualizations.visualizations.byId[id].modelName || "";
};

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

export const selectActiveModelId = createSelector(
  [getVis, activeId],
  (selectVis, activeId) => {
    return activeId !== -1 ? selectVis[activeId].modelId : -1;
  }
);
