import { ADD_ALL_DIMENSIONS } from "./constants";
import update from "immutability-helper";
import { v4 as uuidv4 } from 'uuid';

export const defaultState = {
  dimensions: {
    byDimensionName: {},
  }
};

const dimensions = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALL_DIMENSIONS:
      let { modelId, modelName, dimensions } = action.payload;
      console.log(modelName, modelId, dimensions);
      console.log("inside create new dimension", modelId, "Bil");
      console.log(dimensions);
      let byDimensionName = {};
      dimensions.forEach((o) => {
        const name = o.name;
        byDimensionName[name] = {
            [modelId]: modelName
        }
      });
      updateDimensionsBasedOnCurrentModels(state, byDimensionName);
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

function updateDimensionsBasedOnCurrentModels(state, newDims){
    let dimKeys = Object.keys(newDims);
    console.log("updateDimension");
    console.log(state.dimensions.byDimensionName);
    for (let dimension of Object.keys(state.dimensions.byDimensionName)) {
      console.log(dimension.name);
      if(dimension.name in dimKeys){
        console.log("dimension already in data base");
      }
      else {
        console.log("new dimension");
      }
    }
  return newDims;
}

export default dimensions;