import { CREATE_NEW_MODEL } from "./constants";

export const createNewModel = (modelName, schemaId, specificationId, plotId) => {
  return {
    type: CREATE_NEW_MODEL,
    payload: {
      modelName,
      schemaId,
      specificationId,
      plotId
    }
  }
};