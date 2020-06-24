import { CREATE_NEW_MODEL } from "./constants";

import update from "immutability-helper";
import { EMPTY } from "../constants";

/*
maintains a list of all models
 */
export const defaultState = {
  lastCreatedModelId: EMPTY,
  models: {
    byId: {},
    allIds: []
  }
};


const models = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_MODEL:
      const { model, id } = action.payload;
      let fields = {};
      model.forEach(o => {
        fields[o.name] = o;
      });
      return {
        models: update(state.models, {
          byId: {
            [id]: {
              $set: {
                fields: fields,
                id: id
              }
            }
          },
          allIds: { $set: [id] }
        }),
        lastCreatedModelId: id
      };
    default:
      return state;
  }
};
export default models;