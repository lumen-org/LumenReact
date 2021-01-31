
import {  INITIALIZE_NEW_PLOT_SETTINGS, DELETE_PLOT_SETTINGS } from "./constants";
import { defaultSettings } from "./defaultSettings";
import update from "immutability-helper";

export const defaultState = {
    plotSettings: {},
    globalPlotSettings:{}
  };
  

const plotSettingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_NEW_PLOT_SETTINGS:
        const { id } = action.payload;
        console.log("default settings: ",defaultSettings)

        return {
          ...state,
          plotSettings: update(state.plotSettings, {
            [id]: {
              $set: defaultSettings
            }
          }),
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
