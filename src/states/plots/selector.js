import { createSelector } from "reselect";
import { selectSpecification } from "../specifications/actions";

const selectPlot = state => state.plots.byId;
const currentId = state => state.activePlotId;
const lastCreatedId = state => state.lastCreatedId;

export const selectCurrentPlot = createSelector(
  [selectPlot, currentId],
  (selectPlot, currentId) => {
    return currentId !== -1 ? selectSpecification[currentId] : null
  }
);