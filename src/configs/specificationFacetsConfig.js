const specificationFacetsConfig = {
  facetsActions: [
    {
      name: "Aggregation",
      icon: require("../assets/icons/prediction.svg"),
    },
    {
      name: "Samples",
      icon: require("../assets/icons/dataPoints.svg"),
    },
    {
      name: "Marginals",
      icon: require("../assets/icons/uniDensity.svg"),
    },
    {
      name: "Density",
      icon: require("../assets/icons/contour.svg"),
    },
  ]
};

export const aggregationName = "Aggregation";
export const samplesName = "Samples";
export const marginalName = "Marginals";
export const densityName = "Density";
export const xAxisName = "X-Axis";
export const yAxisName = "Y-Axis";
export default specificationFacetsConfig;