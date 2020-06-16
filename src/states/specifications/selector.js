import { createSelector } from "reselect";
import { selectActiveSpecificationId } from "../visualizations/selector";
const getSpecification = (state) => state.specifications.specifications.byId;
const getActiveSpecId = (state) => selectActiveSpecificationId(state);

export const selectActiveSpecification = createSelector(
  [getSpecification, getActiveSpecId],
  (specificationById, activeId) => {
    return specificationById[activeId];
  }
);

export const getActiveSpecification = (state) => {
  return selectActiveSpecification(state).specification || {};
};

export const getSpecById = (state, id) => {
  return state.specifications.specifications.byId[id].specification || {};
};

export const getFacetById = (state, id) => {
  return state.specifications.specifications.byId[id].facets || {};
};
