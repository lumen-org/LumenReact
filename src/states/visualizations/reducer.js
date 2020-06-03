import { CHANGE_ACTIVE_VISUALIZATION, CREATE_NEW_VISUALIZATION } from "./constants";


/*
This reducer saves all needed ids for each visualization
and returns them for a selected model through selectors
 */
export const defaultState = {
  activeVisualizationId: -1,
  nextId: 0,
  lastCreatedVisualizationId: -1,
  visualizations: {
    byId: [],
    allIds: []
  }
};

const visualizations = (state = defaultState, action) => {
  let visualizations = Object.assign({}, state.visualizations);
  switch (action.type) {
    case CREATE_NEW_VISUALIZATION:
      if (!visualizations.allIds.includes(state.nextId)){
        visualizations.byId[state.nextId] = {
          modelName: action.payload.modelName,
          schemeId: action.payload.schemaId,
          specificationId: action.payload.specificationId,
          plotId: action.payload.plotId,
          visualizationId: state.nextId
        };
        visualizations.allIds = [...visualizations.allIds, state.nextId];
        return {
          ...state,
          nextId: state.nextId + 1,
          lastCreatedVisualizationId: state.nextId,
          activeVisualizationId: state.activeVisualizationId === -1 ? state.nextId: state.activeVisualizationId,
          visualizations
        }
      }
      return state;
    case CHANGE_ACTIVE_VISUALIZATION:
      return {
        ...state,
        activeVisualizationId: action.payload.visualizationId
      }
    default:
      return state;

  }
};

export default visualizations