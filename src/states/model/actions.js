import {
  ADD_TO_SCHEMA,
  DELETE_FROM_SCHEMA
} from "../../constants/modelActionTypes";

import {
  ADD_DATA_FROM_FACET,
  DELETE_DATA_FROM_FACET
} from "../../constants/facetActionTypes";

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

export function addDataFacet(payload) {
  return {
    type: ADD_DATA_FROM_FACET,
    payload
  };
}

export function deleteDataFacet(payload) {
  return {
    type: DELETE_DATA_FROM_FACET,
    payload
  };
}
