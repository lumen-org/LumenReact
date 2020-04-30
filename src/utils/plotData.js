import { fetchPlotData } from "./fetch";

export const getPlotData = (specifications, modelName) => {
  const X_Axis = [...specifications.X_Axis];
  const Y_Axis = [...specifications.Y_Axis];
  const combinations = getPlotCombinations(X_Axis, Y_Axis);
  return Promise.all([
    combinations.map((comb) => {
      return fetchPlotData({
        SELECT: comb,
        FROM: modelName,
      });
    }),
  ]).then((response) => {
    return response;
  });
};

export const getPlotCombinations = (a, b) => {
  let combinations = [];

  if (a.length === 0 && b.length === 0) {
    return [];
  } else if (a.length === 0) {
    for (var k = 0; k < b.length; k++) {
      combinations.push([b[k]]);
    }
    return combinations;
  } else if (b.length === 0) {
    for (var l = 0; l < a.length; l++) {
      combinations.push([a[l]]);
    }
    return combinations;
  } else {
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < b.length; j++) {
        combinations.push([a[i], b[j]]);
      }
    }
    return combinations;
  }
};
