import { CHANGE_ACTIVE_MODEL, CREATE_NEW_MODEL } from "./constants";


/*
This reducer saves all needed ids for each visualization
and returns them for a selected model through selectors
 */
export const defaultState = {
  activeModelId: -1,
  nextId: 0,
  lastCreatedModelId: -1,
  models: {
    byId: [],
    allIds: []
  }
};

const models = (state = defaultState, action) => {
  let models = Object.assign({}, state.models);
  switch (action.type) {
    case CREATE_NEW_MODEL:
      if (!models.allIds.includes(state.nextId)){
        models.byId[state.nextId] = {
          modelName: action.payload.modelName,
          schemeId: action.payload.schemaId,
          specificationId: action.payload.specificationId,
          plotId: action.payload.plotId,
          modelId: state.nextId
        };
        models.allIds = [...models.allIds, state.nextId];
        return {
          ...state,
          nextId: state.nextId + 1,
          lastCreatedModelId: state.nextId,
          activeModelId: state.activeModelId === -1 ? state.nextId: state.activeModelId,
          models
        }
      }
      return state;
    case CHANGE_ACTIVE_MODEL:
      return {
        ...state,
        activeModelId: action.payload.modelId
      }
    default:
      return state;

  }
};

export default models