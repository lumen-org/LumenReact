export const getSpecById = (state, id) => {
  return state.standardspecifications.standardspecifications[id].specification;
};

export const getFacetById = (state, id) => {
  return state.standardspecifications.standardspecifications[id].facets || {};
};

export const getColorCatgeoryById = (state, id) => {
  return (
    [...state.standardspecifications.standardspecifications[id].Color] || []
  );
};
