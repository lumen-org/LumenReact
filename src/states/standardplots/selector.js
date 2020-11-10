import {
  getSelectFieldArray,
  getSelectFieldObject,
} from "../../utils/plotData";
import queryTemplates from "../../utils/queryTemplates";
import { getSpecById } from "../specifications/selector";
import { getSpecificationId } from "../plots/selector";
import { getModelNameById } from "../models/selector";

export const getStandardPlotDataById = (state, id) => {
  return state.standardplots.standardPlots[id] || {};
};

/**
 *
 * @param {the entire redux state} state
 * @param {plot id} id
 *
 * return the selected field items array ready for query.
 */
export const getSelectedFieldArrayById = (state, id) => {
  const specification = getSpecById(state, getSpecificationId(state, id));
  const X_Axis = [...specification.X_Axis];
  const Y_Axis = [...specification.Y_Axis];
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
  const X_Axis = [...specification.X_Axis];
  const Y_Axis = [...specification.Y_Axis];
  const SELECT = getSelectFieldObject(X_Axis, Y_Axis);
  return SELECT;
};

export const getMarginalsQueryBodyById = (state, type, fieldItem, id) => {
  var modelName = "";

  if (type === "data") {
    modelName =
      "emp_" + getModelNameById(state, id).split("_")[1] + "_data_marginal";
  }

  if (type === "model") {
    modelName = getModelNameById(state, id) + "_data_marginal";
  }
  const marginalQueryBody = {
    ...queryTemplates.marginal,
    "SPLIT BY": [
      {
        name: fieldItem,
        split: "equiinterval",
        args: [25],
        class: "Split",
      },
    ],
    PREDICT: [
      fieldItem,
      {
        aggregation: "probability",
        class: "Density",
        name: fieldItem,
      },
    ],
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
    modelName = getModelNameById(state, id) + "_data_marginal";
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
    modelName = getModelNameById(state, id) + "_data_marginal";
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
