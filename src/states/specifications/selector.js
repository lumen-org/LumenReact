import { createSelector } from "reselect";
import { defaultValues } from "./reducer";

const selectSpecifications = state => state.specifications.byId;
const currentId = state => state.currentId;
const lastCreatedId = state => state.lastCreatedId;

export const selectCurrentSpecification = createSelector(
  [selectSpecifications, currentId],
  (selectSpecifications, currentId) => {
    return currentId !== -1 ? selectSpecifications[currentId] : defaultValues
  }
);