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

export const getSelectedFieldArrayById = (state, id) => {
  const specification = getSpecById(state, getSpecificationId(state, id));
  const X_Axis = [...specification.X_Axis];
  const Y_Axis = [...specification.Y_Axis];
  const SELECT = getSelectFieldArray(X_Axis, Y_Axis);
  return SELECT;
};

export const getSelectedFieldObjectById = (state, id) => {
  const specification = getSpecById(state, getSpecificationId(state, id));
  const X_Axis = [...specification.X_Axis];
  const Y_Axis = [...specification.Y_Axis];
  const SELECT = getSelectFieldObject(X_Axis, Y_Axis);
  return SELECT;
};

export const getTrainingDataQueryBodyById = (state, id) => {
  const modelName = getModelNameById(state, id);
  const SELECT = getSelectedFieldArrayById(state, id);
  const trainingDataQueryBody = {
    ...queryTemplates.trainingDataPoints,
    SELECT,
    FROM: modelName,
  };
  return trainingDataQueryBody;
};

export const getModelDataQueryBodyById = (state, id) => {
  const modelName = getModelNameById(state, id);
  const SELECT = getSelectedFieldArrayById(state, id);
  const modelDataQueryBody = {
    ...queryTemplates.modelDataPoints,
    SELECT,
    FROM: modelName,
  };
  return modelDataQueryBody;
};

export const getMarginalsQueryBodyById = (state, type, fieldItem, id) => {
  var modelName = "";

  if (type === "data") {
    modelName =
      "__emp_" +
      getModelNameById(state, id).split("_")[1] +
      "-dataMarginals-_0_0";
  }

  if (type === "model") {
    modelName = getModelNameById(state, id);
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
    PREDICT: [fieldItem],
    FROM: modelName,
  };
  return marginalQueryBody;
};

export const getModelPredictionQueryBodyId = (state, id) => {
  const modelName = getModelNameById(state, id);
  const fieldItems = getSelectedFieldArrayById(state, id);

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
      "__emp_" +
      getModelNameById(state, id).split("_")[1] +
      "-dataMarginals-_0_0";
  }

  if (type === "model") {
    modelName = getModelNameById(state, id);
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
