import { CREATE_NEW_MODEL, SHOW_PCI_GRAPH, HIDE_PCI_GRAPH } from "./constants";
import update from "immutability-helper";
import { EMPTY } from "../constants";
import { createNewDimension } from "../dimensions/actions";

/*
maintains a list of all models
 */
export const defaultState = {
  lastCreatedModelId: EMPTY,
  models: {
    byId: {},
    allIds: [],
  },
};

export function sendDimension (modelName, dimName) {
  return (dispatch) => {
    dispatch(createNewDimension(modelName, dimName))
  }
}

const models = (state = defaultState, action) => {
  let id;
  console.log("inside models store", action);
  switch (action.type) {
    case CREATE_NEW_MODEL:
      let modelName, model;
      ({ modelName, model, id } = action.payload);
      let fields = {};
      model.forEach((o) => {
        const name = o.name;
        fields[name] = o;
      });
      return {
        models: update(state.models, {
          byId: {
            [id]: {
              $set: {
                modelName: modelName,
                fields: fields,
                id: id,
                showPCIGraph: false,
              },
            },
          },
          allIds: { $set: [id] },
        }),
        lastCreatedModelId: id,
      };

    case SHOW_PCI_GRAPH:
      ({ id } = action.payload);
      return {
        ...state,
        models: update(state.models, {
          byId: {
            [id]: {
              $merge: {
                showPCIGraph: true,
              },
            },
          },
        }),
      };

    case HIDE_PCI_GRAPH:
      ({ id } = action.payload);
      return {
        ...state,
        models: update(state.models, {
          byId: {
            [id]: {
              $merge: {
                showPCIGraph: false,
              },
            },
          },
        }),
      };

    default:
      return state;
  }
};
export default models;
