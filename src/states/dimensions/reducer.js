import { CREATE_NEW_DIMENSION } from "./constants";
import update from "immutability-helper";

export const defaultState = {
  dimensions: {
    byDimensionName: {},
  }
};

const dimensions = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_DIMENSION:
      let { modelName, dimensions } = action.payload;
      console.log("inside create new dimension", modelName, "Bil");
      console.log(dimensions);
      let byDimensionName = {};
      dimensions.forEach((o) => {
        const name = o.name;
        byDimensionName[name] = {
          "modelName": modelName,
        }
      });
      return {
        dimensions: update(state.dimensions, {
          $merge: {
              byDimensionName
          }
       })
      };
    default:
      return state;
  }
};

export default dimensions;