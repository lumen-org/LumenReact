import { createSelector } from "reselect";

export const getSpecById = (state, id) => {
  return state.specifications.specifications.byId[id].specification || {};
};

export const getFacetById = (state, id) => {
  return state.specifications.specifications.byId[id].facets || {};
};

export const getLastCreatedSpecId = (state) => {
  return state.specifications.lastCreatedId;
};
