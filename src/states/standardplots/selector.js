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

export const getModelMarginalsQueryBodyById = (state, fieldItem, id) => {
  const modelName = getModelNameById(state, id);
  const modelDataQueryBody = {
    ...queryTemplates.modelMarginal,
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
  return modelDataQueryBody;
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

  console.log(PREDICT);
  return {
    FROM: modelName,
    PREDICT: PREDICT,
  };
};

export const getModelDensityQueryBodyById = (state, id) => {
  const modelName = getModelNameById(state, id);
  const fieldItems = getSelectedFieldArrayById(state, id);

  return {
    FROM: modelName,
    PREDICT: [
      fieldItems[0] || "",
      fieldItems[1] || "",
      {
        name: fieldItems || [],
        aggregation: "probability",
        class: "Density",
      },
    ],
    "SPLIT BY": [
      {
        name: fieldItems[0],
        split: "equiinterval",
        args: [25],
        class: "Split",
      },
      {
        name: fieldItems[1],
        split: "equiinterval",
        args: [25],
        class: "Split",
      },
    ],
  };
};
