import {
  ADD_TO_SCHEMA,
  DELETE_FROM_SCHEMA
} from "../../constants/modelActionTypes";

export function addModel(payload) {
  return {
    type: ADD_TO_SCHEMA,
    payload
  };
}

export function deleteModel(payload) {
  return {
    type: DELETE_FROM_SCHEMA,
    payload
  };
}
