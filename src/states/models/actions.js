import { CHANGE_ACTIVE_MODEL, CREATE_NEW_MODEL } from "./constants";

export const createNewModel = (modelName, schemaId, specificationId, plotId) => {
  return {
    type: CREATE_NEW_MODEL,
    payload: {
      modelName,
      schemeId: schemaId,
      specificationId,
      plotId
    }
  }
};

export const changeActiveModel = (modelId) => {
  return {
    type: CHANGE_ACTIVE_MODEL,
    payload: {
      modelId
    }
  }
}