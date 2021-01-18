import { CREATE_NEW_MODEL, SHOW_PCI_GRAPH, HIDE_PCI_GRAPH, UPDATE_MODEL_DIMENSIONS, DELETE_MODEL } from "./constants";
import update from "immutability-helper";
import { EMPTY } from "../constants";
import { PlotStack } from "../../utils/PlotStack";

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

const models = (state = defaultState, action) => {
  let id;
  //console.log("inside models store", action);
  switch (action.type) {
    case CREATE_NEW_MODEL:
      let modelName, model;
      ({ modelName, model, id } = action.payload);
      console.log(model);
      let fields = {};
      model.forEach((o) => {
        fields[o.name] = o;
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
          allIds: { $push: [id] },
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
    
    case UPDATE_MODEL_DIMENSIONS:
      let dimensions;
      ({ id, dimensions } = action.payload);
      // Todo: Implement here functionality for updating dimensions like delete redundant information and give unique id
      return state;

    case DELETE_MODEL:
      ({ id } = action.payload);
      const allIds = PlotStack.pop(state.models.allIds);
      console.log("id ", id);
      //const byIds = PlotStack.remove(state.models.byId, id);
      return {
        ...state,
        models: update(state.models, {
          //byId: { $unset: [action.payload.id] },
          byId: { $unset: [id] },
          allIds: { $set: allIds },
        }),
      };

    default:
      return state;
  }
};

export default models;
