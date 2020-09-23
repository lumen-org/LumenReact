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

function updateDimensionsBasedOnCurrentModels(newDims){
  return (dispatch, getState) => {
    let state = getState();
    state.dimensions.forEach((dimension) => {
    
    })
  }
}

export default dimensions;