import { ADD_ALL_DIMENSIONS, GET_ALL_DIMENSION_IDS } from "./constants";
import update from "immutability-helper";
import { v4 as uuidv4 } from 'uuid';

export const defaultState = {
  dimensions: {
    byDimensionName: {},
    dimDict: {},
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
          name: name,
          models: {
            [modelId]: modelName
          }
        }
      });
      const updatedDimensions = updateDimensionsBasedOnCurrentModels(state, byDimensionName, modelId, modelName);
      return {
        dimensions: update(state.dimensions, {
          $merge: {
            byDimensionName: updatedDimensions.byDimensionName,
            dimDict: updatedDimensions.dimDict,
          }
       })
      };
    case GET_ALL_DIMENSION_IDS:
      return state// JSON.parse(JSON.stringify(state.dimensions.dimDict));
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
          name: dimension,
          dimId: id,
          models: {
            [modelId]: modelName
          }
        }
        state.dimensions.dimDict[dimension] = id;
        state.dimensions.byDimensionName[dimension] = dim;
      }
    }
  return state.dimensions;
}


export default dimensions;