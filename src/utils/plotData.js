import { fetchPlotData } from "./fetch";

export const nextAvaliableId = (ids) => {
  if (ids.length === 0) {
    return 0;
  } else {
    return (
      Math.max.apply(
        Math,
        ids.map((id) => {
          return id;
        })
      ) + 1
    );
  }
};

export const nextActiveId = (ids) => {
  if (ids.length === 0) {
    return 0;
  } else {
    return Math.max.apply(
      Math,
      ids.map((id) => {
        return id;
      })
    );
  }
};

export const getLayoutInformation = (specifications) => {
  const X_Axis = [...specifications.X_Axis];
  const Y_Axis = [...specifications.Y_Axis];

  if (X_Axis.length === 0 && Y_Axis.length === 0) {
    return {};
  } else if (X_Axis.length === 0 || Y_Axis.length === 0) {
    return {
      row: 1,
      column: 1,
    };
  } else {
    return {
      row: Y_Axis.length,
      column: X_Axis.length,
    };
  }
};

export const fetchAllPlotData = (specifications, modelName) => {
  const X_Axis = [...specifications.X_Axis];
  const Y_Axis = [...specifications.Y_Axis];
  const combinations = getPlotCombinations(X_Axis, Y_Axis);
  return Promise.all([
    combinations.map((comb, ind) => {
      ind++;
      console.log(comb);
      return fetchPlotData({
        SELECT: comb,
        FROM: modelName,
      }).then((response) => {
        return {
          ...response,
          type: "scatter",
          mode: "markers",
          xaxis: "x" + ind, // this is necesarry for building subplots
          yaxis: "y" + ind,
          marker: {
            color: "rgba(17, 157, 255,0.5)",
            size: 5,
            line: {
              color: "rgb(231, 99, 250)",
              width: 1,
            },
          },
        };
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
