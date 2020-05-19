import { ADD_SCHEME } from "./constants";

export const addScheme = (payload) => {
  return {
    type: ADD_SCHEME,
    payload
  };
};