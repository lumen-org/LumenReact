import { CHANGE_ACTIVE_VISUALIZATION, CREATE_NEW_VISUALIZATION } from "./constants";
import update from "immutability-helper";
import uuid;
/*
This reducer saves all needed ids for each visualization
and returns them for a selected model through selectors
 */
export const defaultState = {
  activeVisualizationId: null,
  nextId: 0,
  lastCreatedVisualizationId: null,
  visualizations: {
    byId: {},
    allIds: []
  }
};

/**
 * Represents a store for visualizations
 * actions:
 *    CREATE_NEW_VISUALIZATION
 *        creates a new visualization
 *        @param modelName
 *        @param schemeId
 *        @param specificationId
 *        @param plotId
 * @param state
 * @param action
 */
const visualizations = (state = defaultState, action) => {
  let visualizations = Object.assign({}, state.visualizations);
  switch (action.type) {
    case CREATE_NEW_VISUALIZATION:
      console.log(action.payload.modelId)
      if (!visualizations.allIds.includes(state.nextId)){
        return {
          ...state,
          nextId: state.nextId + 1,
          lastCreatedVisualizationId: state.nextId,
          activeVisualizationId: state.activeVisualizationId === -1 ? state.nextId: state.activeVisualizationId,
          visualizations: update(state.visualizations, {
            byId: {
              [state.nextId]: {
                $set: {
                  modelName: action.payload.modelName,
                  modelId: action.payload.modelId !== -1 ? action.payload.modelId : -1,
                  specificationId: action.payload.specificationId !== -1 ? action.payload.specificationId : -1,
                  plotId: action.payload.plotId !== -1 ? action.payload.plotId : -1,
                  visualizationId: state.nextId
                }
              }
            },
            allIds: { $push: [state.nextId]}
          })
        }
      }
      return state;
    case ADD_PLOT:
      return state;
    case ADD_SECIFICATION:
      return state;
    case ADD_MODEL:
      return state;
    case CHANGE_ACTIVE_VISUALIZATION:
      return {
        ...state,
        activeVisualizationId: action.payload.visualizationId
      };
    default:
      return state;

  }
};

export default visualizations