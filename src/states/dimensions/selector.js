const getDimensions = (state) => state.dimensions.dimensions.byDimensionName;
const getCurrentModelId = (state) => state.models.lastCreatedModelId;

export const getDimensionByName = (state, name) => {
    return state.dimensions.dimensions.getDimensionByName[name];
}

export const getDimensionsOfCurrentModel = (state) => {
    let dimensions = getDimensions(state); 
    let modelId = getCurrentModelId(state);
    let dimFromModel = {};
    for ( let dimension in dimensions) {
        if (Object.keys(dimensions[dimension].models).includes(modelId)){
            dimFromModel[dimension] = dimensions[dimension];
        }
    }
    return dimFromModel;
}
export default getDimensionsOfCurrentModel;
