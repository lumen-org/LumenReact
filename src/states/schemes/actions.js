import { CREATE_NEW_SCHEME } from "./constants";

export const createNewScheme = (payload) => {
  return {
    type: CREATE_NEW_SCHEME,
    payload
  };
};