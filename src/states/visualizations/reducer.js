import {
  CHANGE_ACTIVE_VISUALIZATION,
  CREATE_NEW_VISUALIZATION,
  DELETE_VISUALIZATION,
  FILL_VISUALIZATION
} from "./constants";
import update from "immutability-helper";
import { act } from "react-dom/test-utils";
import { EMPTY } from "../constants";

/*
This reducer saves all needed ids for each visualization
and returns them for a selected model through selectors
 */
export const defaultState = {
  activeVisualizationId: EMPTY,
  lastCreatedVisualizationId: EMPTY,
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
      const { id, modelId, specificationId, plotId } = action.payload;
      if (!visualizations.allIds.includes(id)) {
        return {
          ...state,
          lastCreatedVisualizationId: id,
          visualizations: update(state.visualizations, {
            byId: {
              [id]: {
                $set: {
                  modelId: modelId,
                  specificationId: specificationId,
                  plotId: plotId,
                  visualizationId: id
                }
              }
            },
            allIds: { $push: [id] }
          })
        };
      }
      return state;
    case FILL_VISUALIZATION: {
      const { visualizationId } = action.payload;
      if (visualizations.allIds.includes(visualizationId)
        && !visualizations.byId[visualizationId].modelId
        && !visualizations.byId[visualizationId].specificationId
        && !visualizations.byId[visualizationId].plotId) {
        return {
          ...state,
          activeVisualizationId: visualizationId,
          visualizations: update(state.visualizations, {
            byId: {
              [visualizationId]: {
                $merge: {
                  modelId: action.payload.modelId,
                  specificationId: action.payload.specificationId,
                  plotId: action.payload.plotId
                }
              }
            }
          })
        };
      }
      return state;
    }
    case DELETE_VISUALIZATION:{
      const { visualizationId } = action.payload;
      return {
        ...state,
        visualizations: update(state.visualizations, {
          byId: {
            $unset: [visualizationId]
          },
          allIds: {
            $splice: [[state.visualizations.allIds.indexOf(visualizationId), 1]]
          }
        }),
        activeVisualizationId: state.activeVisualizationId === visualizationId ? EMPTY : state.activeVisualizationId
      };
    }

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

export default visualizations;