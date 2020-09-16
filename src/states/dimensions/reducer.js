import { CREATE_NEW_DIMENSION } from "./constants";
import update from "immutability-helper";
import { getModelById } from "../models/selector";

export const defaultState = {
  dimensions: {
    byDimensionName: {},
  }
};

const dimensions = (state = defaultState, action) => {
  console.log("inside dimension store", action);
  console.log(state);
  switch (action.type) {
    case CREATE_NEW_DIMENSION:
      let { modelName, dimensions } = action.payload;
      console.log(modelName);
      //let fields = getModelById(action.payload.getState(), modelName).fields;
      //fields.array.forEach(element => {
        
      //});
      console.log("inside create new dimension");
      let fields = {};
      /*dimensions.array.forEach((o) => {
        fields[o.name] = modelName;
      });*/
      return {
        dimensions: update(state.dimensions, {
          byDimensionName: {
            $set:{
              ["Dd"]: {
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