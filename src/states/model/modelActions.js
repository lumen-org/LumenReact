import { ADD_TO_SCHEMA, DELETE_FROM_SCHEMA } from "../../constants/modelActionTypes";

export function add_model_to_list(payload) {
  return {
    type: ADD_TO_SCHEMA,
    payload
  }
}

export function delete_model_from_list(payload) {
  return {
    type: DELETE_FROM_SCHEMA,
    payload
  }
}
