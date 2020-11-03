import { createSelector } from "reselect";
import { selectActiveModelId } from "../visualizations/selector";

const getModel = (state) => state.models.models.byId;
const getActiveId = (state) => selectActiveModelId(state);

/// id is plot id
export const getModelNameById = (state, id) => {
  //return state.models.models.byId[id].modelName || "";
  return (
    state.models.models.byId[
      state.visualizations.visualizations.byId[
        state.plots.plots.byId[id].visualizationId
      ].modelId
    ].modelName || ""
  );
};

export const getLastCreatedModelId = (state) => {
  return state.models.lastCreatedModelId;
};

export const selectSchemeNames = createSelector(
  [getModel, getActiveId],
  (models, activeId) => {
    const activeModel = models[activeId] || [];
    const fields = activeModel.fields || [];
    let categoricalFields = [];
    let quantitativeFields = [];
    // let categoricalFields = fields.filter((field, index) => {
    //   return field.dtype === "string";
    // });
    // let quantitativeFields = fields.filter((field, index) => {
    //   return field.dtype === "numerical";
    // });
    // const quantitative = [];
    if (fields !== []) {
      categoricalFields = Object.entries(fields).filter((value) => {
        return value[1].dtype === "string";
      });
      quantitativeFields = Object.entries(fields).filter(([value, peter]) => {
        return peter.dtype === "numerical";
      });
    }
    const quantitative =
      quantitativeFields !== []
        ? quantitativeFields.map(([key, field]) => field.name)
        : [];
    const categorical =
      categoricalFields !== []
        ? categoricalFields.map(([key, field]) => field.name)
        : [];
    return {
      quantitative,
      categorical,
    };
  }
);
