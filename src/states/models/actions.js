import { CREATE_NEW_MODEL } from "./constants";
import { v4 as uuidv4 } from 'uuid';

export const createNewModel = (model, id=uuidv4()) => {
  return {
    type: CREATE_NEW_MODEL,
    payload: {
      model,
      id
    }
  }
};