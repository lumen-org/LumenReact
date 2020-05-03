import {
  ADD_TO_SCHEMA,
  DELETE_FROM_SCHEMA,
  UPDATE_FACET_STATE,
} from "./constants";

export function addModel(payload) {
  return {
    type: ADD_TO_SCHEMA,
    payload,
  };
}

export function deleteModel(payload) {
  return {
    type: DELETE_FROM_SCHEMA,
    payload,
  };
}

export function updateFacetState(payload) {
  return {
    type: UPDATE_FACET_STATE,
    payload,
  };
}
