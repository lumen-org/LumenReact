import { fetch2DPlotData } from "./fetch";
import { xAxisName, yAxisName } from "../configs/specificationFacetsConfig";

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
  const X_Axis = [...specifications[xAxisName]];
  const Y_Axis = [...specifications[yAxisName]];

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

// TODO: This function can be deleted if we restrict the number of entries
// for each field in specification
export const getSelectFieldArray = (X_Axis, Y_Axis) => {
  var SELECT;
  if (X_Axis.length === 0 && Y_Axis.length > 0) {
    SELECT = [X_Axis[0]];
  } else if (Y_Axis.length === 0 && X_Axis.length > 0) {
    SELECT = [Y_Axis[0]];
  } else if (Y_Axis.length === 0 && X_Axis.length === 0) {
    SELECT = [];
  } else {
    SELECT = [X_Axis[0], Y_Axis[0]];
  }
  return SELECT;
};

export const getSelectFieldObject = (X_Axis, Y_Axis) => {
  var SELECT;
  if (X_Axis.length === 0 && Y_Axis.length > 0) {
    SELECT = { x: X_Axis[0] };
  } else if (Y_Axis.length === 0 && X_Axis.length > 0) {
    SELECT = { y: Y_Axis[0] };
  } else if (Y_Axis.length === 0 && X_Axis.length === 0) {
    SELECT = [];
  } else {
    SELECT = { x: X_Axis[0], y: Y_Axis[0] };
  }
  return SELECT;
};

// TODO: refractor this to action or fetch
export const fetchAllPlotData = (specifications, modelName) => {
  const X_Axis = [...specifications[xAxisName]];
  const Y_Axis = [...specifications[yAxisName]];
  const combinations = getPlotCombinations(X_Axis, Y_Axis);
  return Promise.all([
    combinations.map((comb, ind) => {
      ind++;
      return fetch2DPlotData({
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
