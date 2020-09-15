import { getSelectFieldArray } from "../../utils/plotData";
import queryTemplates from "../../utils/queryTemplates";
import { getSpecById } from "../specifications/selector";
import { getSpecificationId, getActivePlotId } from "../plots/selector";
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
