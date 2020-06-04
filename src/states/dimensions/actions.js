import { CREATE_NEW_DIMENSION } from "./constants";

export const createNewDimension = ({name}) => {
  return {
    type: CREATE_NEW_DIMENSION,
    payload: {
      name
    }
  }
}