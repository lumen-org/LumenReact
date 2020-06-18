import { CREATE_NEW_MODEL } from "./constants";

export const createNewModel = (payload) => {
  return {
    type: CREATE_NEW_MODEL,
    payload
  }
};