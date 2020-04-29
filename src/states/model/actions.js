import {
  ADD_TO_SCHEMA,
  DELETE_FROM_SCHEMA
} from "../../constants/modelActionTypes";

import {
  CHANGE_FACETS,
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

export function changeDataFacet(payload) {
  return {
    type: CHANGE_FACETS,
    payload
  };
}

