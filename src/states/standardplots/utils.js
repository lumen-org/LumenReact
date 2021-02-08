import {
  getSelectFieldArray,
  getSelectFieldObject,
} from "../../utils/plotData";
import queryTemplates from "../../utils/queryTemplates";
import { getSpecById } from "../specifications/selector";
import { getSpecificationId } from "../plots/selector";
import { getModelNameById } from "../models/selector";
import { getColorCatgeoryById } from "../standardspecifications/selector.js";
import { xAxisName, yAxisName } from "../../configs/specificationFacetsConfig";
/**
 *
 * @param {the entire redux state} state
 * @param {plot id} id
 *
 * return the selected field items array ready for query.
 */
export const getSelectedFieldArrayById = (state, id) => {
  const specification = getSpecById(state, getSpecificationId(state, id));
  const X_Axis = [...specification[xAxisName]];
  const Y_Axis = [...specification[yAxisName]];
  const SELECT = getSelectFieldArray(X_Axis, Y_Axis);
  return SELECT;
};

/**
 *
 * @param {the entire redux state} state
 * @param {plot id} id
 * return the selected field items in format of object.
 */

export const getSelectedFieldObjectById = (state, id) => {
  const specification = getSpecById(state, getSpecificationId(state, id));
  const X_Axis = [...specification[xAxisName]];
  const Y_Axis = [...specification[yAxisName]];
  const SELECT = getSelectFieldObject(X_Axis, Y_Axis);
  return SELECT;
};

export const getMarginalsQueryBodyById = (state, type, fieldItem, id) => {
  var modelName = "";

  // TODO: Use submodel, right now when color field is updated, no submodels are created,so we use the whole model
  if (type === "data") {
    modelName = "emp_" + getModelNameById(state, id).split("_")[1]; // + "_data_marginal";
  }

  if (type === "model") {
    modelName = "mcg_" + getModelNameById(state, id).split("_")[1]; //+ "_data_marginal";
  }
  const colorSpec = getColorCatgeoryById(state, getSpecificationId(state, id));
  var splitBy = [
    {
      name: fieldItem,
      split: "equiinterval",
      args: [25],
      class: "Split",
    },
  ];
  var fieldItems = [fieldItem];
  if (colorSpec.length !== 0) {
    splitBy.push({
      name: colorSpec[0],
      split: "elements",
      class: "Split",
    });
    fieldItems.push(colorSpec[0]);
  }

  const PREDICT = fieldItems.concat([
    {
      aggregation: "probability",
      class: "Density",
      name: fieldItems,
    },
  ]);

  const marginalQueryBody = {
    "SPLIT BY": splitBy,
    PREDICT: PREDICT,
    FROM: modelName,
  };
  return marginalQueryBody;
};

export const getPredictionQueryBodyId = (state, type, id) => {
  const fieldItems = getSelectedFieldArrayById(state, id);
  var modelName = "";

  if (type === "data") {
    modelName =
      "emp_" + getModelNameById(state, id).split("_")[1] + "_data_marginal";
  }

  if (type === "model") {
    modelName =
      "mcg_" + getModelNameById(state, id).split("_")[1] + "_data_marginal";
  }
  const PREDICT = fieldItems.map((item, key) => {
    return {
      aggregation: "maximum",
      class: "Aggregation",
      name: [item],
      yields: item,
    };
  });

  return {
    FROM: modelName,
    PREDICT: PREDICT,
  };
};

export const getDensityQueryBodyById = (state, type, id) => {
  const fieldItems = getSelectedFieldArrayById(state, id);
  var modelName = "";

  if (type === "data") {
    modelName =
      "emp_" + getModelNameById(state, id).split("_")[1] + "_data_marginal";
  }

  if (type === "model") {
    modelName =
      "mcg_" + getModelNameById(state, id).split("_")[1] + "_data_marginal";
  }
  const PREDICT = fieldItems.map((item, key) => {
    return item;
  });

  PREDICT.push({
    ...queryTemplates.density.prediction,
    name: fieldItems,
  });

  const SPLIT_BY = fieldItems.map((item, key) => {
    return {
      ...queryTemplates.density.split,
      name: item,
    };
  });

  return {
    FROM: modelName,
    PREDICT: PREDICT,
    "SPLIT BY": SPLIT_BY,
  };
};
