import { ADD_ALL_DIMENSIONS, DELETE_DIMENSIONS } from "./constants";
import update from "immutability-helper";
import { v4 as uuidv4 } from 'uuid';

export const defaultState = {
  dimensions: {
    byDimensionName: {},
  }
};

const dimensions = (state = defaultState, action) => {
  let modelId, modelName, dimensions, byDimensionName;
  switch (action.type) {
    case ADD_ALL_DIMENSIONS:
      ( { modelId, modelName, dimensions } = action.payload);
      byDimensionName = {};
      dimensions.forEach((o) => {
        const name = o.name;
        byDimensionName[name] = {
          name: name,
          domain: o.domain,
          extent: o.extent,
          dtype: o.dtype,
          hidden: o.hidden,
          independent: o.independent,
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
          }
       })
      };
    case DELETE_DIMENSIONS:
      ({ modelId } = action.payload);
      let byDimensionNameNew = state.dimensions.byDimensionName;
      for (let dimensionName in state.dimensions.byDimensionName) {
        let o = state.dimensions.byDimensionName[dimensionName];
        if (o.models.hasOwnProperty(modelId)){
          delete byDimensionNameNew[dimensionName].models[modelId];
          if (Object.keys(byDimensionNameNew[dimensionName].models).length === 0) {
            delete byDimensionNameNew[dimensionName];
          }
        }
      };
      return {
        dimensions: update(state.dimensions, {
            byDimensionName: { $set: byDimensionNameNew},

        })
      }
    default:
      return state;
  }
};

function updateDimensionsBasedOnCurrentModels(state, newDims, modelId, modelName){
    let dimKeys = Object.keys(newDims);
    for (let dimension of dimKeys) {
      //console.log(dimension);
      if(dimension in state.dimensions.byDimensionName){
        state.dimensions.byDimensionName[dimension].models[modelId] = modelName;
      }
      else {
        const id = "idFromBackend"//uuidv4();
        const dim = {
          name: newDims[dimension].name,
          dimId: id,
          domain: newDims[dimension].domain,
          extent: newDims[dimension].extent,
          dtype: newDims[dimension].dtype,
          hidden: newDims[dimension].hidden,
          independent: newDims[dimension].independent,
          models: {
            [modelId]: modelName
          }
        }
        state.dimensions.byDimensionName[dimension] = dim;
      }
    }
  return state.dimensions;
}

export default dimensions;