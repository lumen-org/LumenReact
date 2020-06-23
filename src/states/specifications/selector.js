import { createSelector } from "reselect";

export const getSpecById = (state, id) => {
  console.log(id);
  return state.specifications.specifications.byId[id].specification || {};
};

export const getFacetById = (state, id) => {
  return state.specifications.specifications.byId[id].facets || {};
};
