const modelPrediction = {
  FROM: "mcg_iris_map",
  PREDICT: [
    {
      aggregation: "maximum",
      class: "Aggregation",
      name: ["sepal_width"],
      yields: "sepal_width",
    },
  ],
};

const modelDataPoints = {
  FROM: "mcg_iris_map",
  PREDICT: ["sepal_length"],
  "SPLIT BY": [
    { name: "sepal_length", split: "equiinterval", args: [25], class: "Split" },
  ],
};
