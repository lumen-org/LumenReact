import { createSelector } from "reselect";
import { selectActiveModelId } from "../visualizations/selector";

const getModel = (state) => state.models.models.byId;
const getActiveId = (state) => selectActiveModelId(state);

/**
 * Selector for getting the model name through the plot id
 * @param {Object} state current state
 * @param {string} id plot id
 * @returns {string} the corresponding model name
 */
export const getModelNameById = (state, id) => {
  try {
    return state.plots.plots.byId[id].model;
  }
  catch (e) {
    console.log(e);
    return "";
  }
};

/**
 * checks whether is modelId in models.allIds
 * @param {Object} state current state
 * @param {string} id modelId
 * @returns {boolean}
 */
export const isIdInAllIds = (state, id) => {
  return state.models.models.byId.hasOwnProperty(id);
}

/**
 * Gets the modelId with the plot id
 * @param {Object} state current state
 * @param {string} id plotId
 * @returns {string}
 */
export const getModelIdByPlotId = (state, id) => {
  try {
    return state.visualizations.visualizations.byId[
      state.plots.plots.byId[id].visualizationId
      ].modelId
  }
  catch (e) {
    console.log(e);
    return "";
  }
};

/**
 * Gets the model id with the visualization id
 * @param {Object} state current state
 * @param {string} id visualizationId
 * @returns {string}
 */
export const getModelIdByVisualisationId = (state, id) => {
  try {
    return state.visualizations.visualizations.byId[id].modelId
  }
  catch (e) {
    console.log(e);
    return "";
  }
}

/**
 * Gets last created modelId
 * @param  {Object} state
 * @returns {string|null}
 */
export const getLastCreatedModelId = (state) => {
  try {
    return state.models.lastCreatedModelId;
  }
  catch (e) {
    console.log(e);
    return null;
  }
};

/**
 *  returns the dimension types as either categorical or quantitative
 * */
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
