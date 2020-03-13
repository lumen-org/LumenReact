import { GET_SPECIFICATION, GET_SCHEMA } from "../../constants/actionType";

export function getSchema(payload) {
  return {
    type: GET_SCHEMA,
    payload
  };
}
