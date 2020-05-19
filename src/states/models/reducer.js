import { CREATE_NEW_MODEL } from "./constants";


export const defaultState = {
  activeModelId: undefined,
  nextId: 0,
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
          schemaId: action.payload.schemaId,
          specificationId: action.payload.specificationId,
          plotId: action.payload.plotId,
          modelId: state.nextId
        };
        models.allIds = [...models.allIds, state.nextId];
        return {
          ...state,
          nextId: state.nextId + 1,
          activeModelId: state.activeModelId ? state.activeModelId : state.nextId,
          models
        }
      }
      return state;
    default:
      return state;

  }
};

export default models