import { MULTI_SPECIFICATION, STANDARD_SPECIFICATION } from "./specificationTypes";

export const getSpecType = (state, id) => {
  return state.specifications.specifications.byId[id].specificationType || {};
};

export const getSpecById = (state, id) => {
  const specType = getSpecType(state, id);
  if (specType === STANDARD_SPECIFICATION) {
    return state.standardspecifications.standardspecifications[id]
      .specification;
  } else if (specType === MULTI_SPECIFICATION) {
    return state.multispecifications.multispecifications[id]
      .specification;
  }
};

export const getFacetById = (state, id) => {
  const specType = getSpecType(state, id);
  if (specType === STANDARD_SPECIFICATION) {
    return state.standardspecifications.standardspecifications[id].facets || {};
  }
};

export const getLastCreatedSpecId = (state) => {
  return state.specifications.lastCreatedId;
};
