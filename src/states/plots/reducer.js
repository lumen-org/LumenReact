import { CREATE_NEW_PLOT, CHANGE_ACTIVE_PLOT, DELETE_PLOT } from "./constants";

import update from "immutability-helper";
import { nextAvaliableId } from "../../utils/plotData";
import { PlotStack } from "../../utils/PlotStack";
import { EMPTY } from "../constants";

export const defaultState = {
  plots: {
    byId: {},
    allIds: [],
  },
  activePlotId: EMPTY,
  lastCreatedId: EMPTY,
};

const plotsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_PLOT:
      const newAllIds = PlotStack.moveToTop(
        state.plots.allIds,
        action.payload.newid
      );
      newAllIds.map((elem, index) => (state.plots.byId[elem].zIndex = index));
      return {
        ...state,
        plots: update(state.plots, {
          byId: { $set: Object.assign({}, state.plots.byId) },
          allIds: { $set: newAllIds },
        }),
        activePlotId: action.payload.newid,
      };

    case CREATE_NEW_PLOT:
      const newId = nextAvaliableId(state.plots.allIds);
      const {
        modelName,
        visualizationId,
        specificationId,
        plotType,
      } = action.payload;
      return {
        ...state,
        plots: {
          byId: update(state.plots.byId, {
            [newId]: {
              $set: {
                id: newId,
                model: modelName,
                visualizationId: visualizationId,
                specificationId: specificationId,
                plotType: plotType,
                zIndex: 0,
                multiPlotData: [],
                layout: {},
                show: true,
              },
            },
          }),
          allIds: PlotStack.push(state.plots.allIds, newId),
        },
        activePlotId: newId,
        lastCreatedId: newId,
      };

    case DELETE_PLOT:
      const allIds = PlotStack.pop(state.plots.allIds);
      return {
        ...state,
        plots: update(state.plots, {
          byId: { $unset: [action.payload.id] },
          allIds: { $set: allIds },
        }),
        activePlotId: PlotStack.peek(state.plots.allIds),
      };
    default:
      return state;
  }
};

export default plotsReducer;
