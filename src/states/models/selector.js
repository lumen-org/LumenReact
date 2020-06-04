import { createSelector } from "reselect";
import { selectActiveModelId } from "../visualizations/selector";
const getModel = (state) => state.models.models.byId;
const getActiveId = (state) => selectActiveModelId(state);

export const selectSchemeNames = createSelector(
  [getModel, getActiveId],
  (models, activeId) => {
    const activeModel = models[activeId] || [];
    const quantitativeFields = activeModel.quantitativeFields || [];
    const categoricalFields = activeModel.categoricalFields || [];
    const quantitative = quantitativeFields.map((field) => field.name);
    const categorical = categoricalFields.map((field) => field.name);
    return {
      quantitative,
      categorical,
    };
  }
);