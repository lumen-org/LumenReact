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
          models: {
            [modelId]: modelName
          }
        }

      });
      byDimensionName = updateDimensionsBasedOnCurrentModels(state, byDimensionName, modelId, modelName);
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

function updateDimensionsBasedOnCurrentModels(state, newDims, modelId, modelName){
    let dimKeys = Object.keys(newDims);
    console.log("updateDimension");
    console.log("dimKeys", dimKeys);
    console.log(state.dimensions.byDimensionName);
    for (let dimension of dimKeys) {
      console.log(dimension);
      if(dimension in state.dimensions.byDimensionName){
        console.log("dimension already in data base");
        /// Want to update the newDims with a new modelid in models
        /// should update newDims mit state 
        state.dimensions.byDimensionName[dimension].models[modelId] = modelName;
      }
      else {
        console.log("new dimension");
        /// new dimension in byDimensionName 
        // should include new Id, models with 
        const id = uuidv4();
        const dim = {
          dimId: id,
          models: {
            [modelId]: modelName
          }
        }
        state.dimensions.byDimensionName[dimension] = dim;
      }
    }
  return state.dimensions.byDimensionName;
}

export default dimensions;