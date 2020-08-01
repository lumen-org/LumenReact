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
