import { CHANGE_ACTIVE_VISUALIZATION, CREATE_NEW_VISUALIZATION, FILL_VISUALIZATION } from "./constants";
import update from "immutability-helper";
import { act } from "react-dom/test-utils";

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
      const { modelName, id, modelId, specificationId, plotId} = action.payload;
      if (!visualizations.allIds.includes(state.nextId)){
        return {
          ...state,
          nextId: state.nextId + 1,
          lastCreatedVisualizationId: id,
          visualizations: update(state.visualizations, {
            byId: {
              [id]: {
                $set: {
                  modelName: modelName,
                  modelId: modelId,
                  specificationId: specificationId,
                  plotId: plotId,
                  visualizationId: id
                }
              }
            },
            allIds: { $push: [id]}
          })
        }
      }
      return state;
      case FILL_VISUALIZATION:
        const { visualizationId } = action.payload
        if (visualizations.allIds.includes(visualizationId)
        && !visualizations.byId[visualizationId].modelId 
        && !visualizations.byId[visualizationId].specificationId 
        && !visualizations.byId[visualizationId].plotId){
          return {
            ...state,
            activeVisualizationId: visualizationId,
            visualizations: update(state.visualizations, {
              byId: {
                [visualizationId]: {
                  $merge: {
                    modelId: action.payload.modelId,
                    specificationId: action.payload.specificationId,
                    plotId: action.payload.plotId,
                  }
                }
              }
            })
          }
        }
        return state

    // case ADD_PLOT:
    //   return state;
    // case ADD_SECIFICATION:
    //   return state;
    // case ADD_MODEL:
    //   return state;
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