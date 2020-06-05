import { createSelector } from "reselect";
import { selectActiveModelId } from "../visualizations/selector";

const getModel = (state) => state.models.models.byId;
const getActiveId = (state) => selectActiveModelId(state);

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
      categoricalFields = Object.entries(fields).filter(value => {
        return value[1].dtype === "string";
      });
      quantitativeFields = Object.entries(fields).filter(([value, peter]) => {
        return peter.dtype === "numerical"
      });
    }
    const quantitative = quantitativeFields !== [] ? quantitativeFields.map(([key, field]) => field.name) : [];
    const categorical = categoricalFields !== [] ? categoricalFields.map(([key, field]) => field.name) : [];
    console.log(quantitativeFields);
    return {
      quantitative,
      categorical
    };
  }
);

// {
//   categoricalFields: response["fields"].filter((field, index) => {
//     return field.dtype === "string";
//   }),
//     quantitativeFields: response["fields"].filter((field, index) => {
//   return field.dtype === "numerical";
// }),
// };