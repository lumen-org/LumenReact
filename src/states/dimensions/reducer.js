import { CREATE_NEW_DIMENSION } from "./constants";
import update from "immutability-helper";

export const defaultState = {
  dimensions: {
    byDimensionName: {},
  }
};

const dimensions = (state = defaultState, action) => {
  console.log("inside dimension store", action);
  switch (action.type) {
    case CREATE_NEW_DIMENSION:
      let { dimensionName, modelName } = action.payload;
      console.log("inside create new dimension", dimensionName);
      return {
        dimensions: update(state.dimensions, {
          byDimensionName: {
            [dimensionName]: {
              $set: {
                modelname: modelName,
              },
            },
          },
        })
      };
    default:
      return state;
  }
};

export default dimensions;