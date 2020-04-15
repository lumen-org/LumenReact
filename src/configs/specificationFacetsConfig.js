const specificationFacetsConfig = {
  facetsActions: [
    {
      name: "Prediction",
      icon: require("../assets/icons/prediction.svg"),
      model: false,
      data: false,
    },
    {
      name: "Data Points",
      icon: require("../assets/icons/dataPoints.svg"),
      model: false,
      data: true,
    },
    {
      name: "Marginals",
      icon: require("../assets/icons/uniDensity.svg"),
      model: false,
      data: true,
    },
    {
      name: "Density",
      icon: require("../assets/icons/contour.svg"),
      model: false,
      data: false,
    },
  ]
};

export default specificationFacetsConfig;