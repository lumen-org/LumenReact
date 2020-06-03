import { createSelector } from "reselect";
import { selectActiveSchemeId } from "../models/selector";
const getSchemes = (state) => state.schemes.schemes.byId;
const getActiveId = (state) => selectActiveSchemeId(state);

export const selectSchemeNames = createSelector(
  [getSchemes, getActiveId],
  (schemes, activeId) => {
    const activeSchemes = schemes[activeId] || [];
    const quantitativeFields = activeSchemes.quantitativeFields || [];
    const categoricalFields = activeSchemes.categoricalFields || [];
    const quantitative = quantitativeFields.map((field) => field.name);
    const categorical = categoricalFields.map((field) => field.name);
    return {
      quantitative,
      categorical,
    };
  }
);
