
import {  INITIALIZE_NEW_PLOT_SETTINGS, 
          DELETE_PLOT_SETTINGS, 
          UPDATE_XLABEL, 
          UPDATE_PLOT_TITLE, 
          UPDATE_YLABEL} 
          from "./constants";
import { defaultSettings } from "./defaultSettings";
import update from "immutability-helper";

export const defaultState = {
    plotSettings: {},
    globalPlotSettings:{}
  };
  

const plotSettingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_NEW_PLOT_SETTINGS:

        return {
          ...state,
          plotSettings: update(state.plotSettings, {
            [action.payload.id]: {
              $set: defaultSettings
            }
          }),
        };


    case UPDATE_PLOT_TITLE:

        return {
          ...state,
          plotSettings: {
            ...state.plotSettings,
            [action.payload.id]: {
              ...state.plotSettings[action.payload.id],
              layout:{
                ...state.plotSettings[action.payload.id].layout,
                title: action.payload.updatedTitle
              }
            }
          }
        };


    case DELETE_PLOT_SETTINGS:

        return {
        ...state,
        plotSettings: update(state.plotSettings, {
            $unset: [action.payload.id],
        }),
        };

    default:
      return state;
  }
};

export default plotSettingsReducer;
