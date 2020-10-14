import { createSelector } from "reselect";

const getDimensions = (state) => state.dimensions.dimensions.byDimensionName;
const getCurrentModelId = (state) => state.models.lastCreatedModelId;
export const getDimensionByName = (state, name) => {
    return state.dimensions.dimensions.getDimensionByName[name];
}

export const getDimensionsByModelId = createSelector(
    [getDimensions, getCurrentModelId],
    (dimensions, modelId) => {
        let dimFromModel = {};
        console.log("selector", dimensions);
        console.log("modelid", modelId);
        return { "bli": "blid"}
        return Object.entries(dimensions).filter((dimension) => {
            return modelId in dimensions[dimension].models;
          });
        for ( let dimension in Object.entries(dimensions)) {
            console.log("element", dimension);
            if (modelId in dimensions[dimension].models){
                 dimFromModel[dimension] = dimensions[dimension];
            }
        }
        console.log("dimFromModel", dimFromModel);
        return dimFromModel;
    }
);