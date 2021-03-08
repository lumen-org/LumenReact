export const getPPCSpecDefaults = (state, id) => {
  try {
    console.log(id, " id");
    return state.ppcspecifications.ppcspecifications[state.plots.plots.byId[id].specificationId];
  }
  catch (e){
    console.log(e);
    return {};
  }
};

//export const getModelNameBySpecificationId
/**
 * Returns indicated parameter value
 * @param state current state
 * @param id ppcspecificationId
 * @param parameter here either statistic, k or n
 * @returns {*}
 */
export const getParameter = (state, id, parameter) => {
  return state.ppcspecifications.ppcspecifications[id][parameter];
}