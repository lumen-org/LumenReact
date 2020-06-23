import { CREATE_NEW_MODEL } from "./constants";

import update from "immutability-helper";
import { EMPTY } from "../constants";

/*
maintains a list of all models
 */
export const defaultState = {
  nextId: 0,
  lastCreatedModelId: EMPTY,
  models: {
    byId: {},
    allIds: []
  }
};


const models = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_MODEL:
      let fields = {};
      action.payload.forEach(o => {
        fields[o.name] = o;
      });
      return {
        models: update(state.models, {
          byId: {
            [state.nextId]: {
              $set: {
                fields: fields,
                id: state.nextId
              }
            }
          },
          allIds: { $set: [state.nextId] }
        }),
        nextId: state.nextId + 1,
        lastCreatedModelId: state.nextId
      };
    default:
      return state;
  }
};
export default models;