import { createSelector } from "reselect";

const getModels = state => state.models.models.byId;
const activeId = state => state.models.activeModelId;

export const selectCurrentModel = createSelector(
  [getModels, activeId],
  (selectModel, activeId) => {
    return activeId !== -1 ? selectModel[activeId] : {};
  }
);

export const selectActiveSpecificationId = createSelector(
  [getModels, activeId],
  (selectModel, activeId) => {
    return activeId !== -1 ? selectModel[activeId].specificationId : -1;
  }
);

export const selectActivePlotId = createSelector(
  [getModels, activeId],
  (selectModel, activeId) => {
    return activeId !== -1 ? selectModel[activeId].plotId : -1;
  }
);

export const selectActiveSchemeId = createSelector(
  [getModels, activeId],
  (selectModel, activeId) => {
    return activeId !== -1 ? selectModel[activeId].schemeId : -1;
  }
);

