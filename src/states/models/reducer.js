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

/**
 * Represents a store for models
 * actions:
 *    CREATE_NEW_MODEL
 *        creates a new model
 *        @param modelName
 *        @param schemeId
 *        @param specificationId
 *        @param plotId
 * @param state
 * @param action
 * @returns {{models, nextId, lastCreatedModelId, activeModelId: *}|{models: *, nextId: number, lastCreatedModelId: *, activeModelId: (*)}|{models: {byId: [], allIds: []}, nextId: number, lastCreatedModelId: number, activeModelId: number}}
 */
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