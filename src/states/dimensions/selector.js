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

        /*return Object.entries(dimensions).filter((dimension) => {
            console.log(Object.keys(dimension[1].models).includes(modelId));
            return (Object.keys(dimension[1].models).includes(modelId));
          });*/
        for ( let dimension in Object.entries(dimensions)) {
            console.log("element", dimension);
            if (Object.keys(dimensions[dimension].models).includes(modelId)){
                 dimFromModel[dimension] = dimensions[dimension];
            }
        }

        console.log("dimFromModel", dimFromModel);
        return dimFromModel;
    }
);