export const selectSpecifications = state => state.specifications;
export const currentId = state => state.currentId;

export const selectCurrentSpecification = createSelector(
  selectSpecifications,
  currentId,
  (selectSpecifications, currentId) => selectedId !== -1 ? selectSpecifications[currentId] : null
);
}
;