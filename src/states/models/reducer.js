import { CREATE_NEW_MODEL } from "./constants";

/*
maintains a list of all models
 */
export const defaultState = {
  nextId: 0,
  lastCreatedModelId: -1,
  models: {
    byId: [],
    allIds: []
  }
};

const models = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_MODEL:
      return {
        models: {
          byId: [...state.models.byId, { ...action.payload, id: state.nextId }],
          allIds: [...state.models.allIds, state.nextId]
        },
        nextId: state.nextId + 1,
        lastCreatedModelId: state.nextId
      };
    default:
      return state;
  }
};

export default models;