const queryTemplates = {
  model1DPrediction: {
    FROM: "mcg_iris_map",
    PREDICT: [
      {
        aggregation: "maximum",
        class: "Aggregation",
        name: ["sepal_width"],
        yields: "sepal_width",
      },
    ],
  },

  modelMarginal: {
    FROM: "mcg_iris_map",
    PREDICT: ["sepal_length"],
    "SPLIT BY": [
      {
        name: "sepal_length",
        split: "equiinterval",
        args: [25],
        class: "Split",
      },
    ],
  },

  modelDataPoints: {
    FROM: "mcg_iris_map",
    OPTS: {
      data_category: "model samples",
      data_point_limit: 2000,
      number_of_samples: 200,
    },
    SELECT: ["sepal_width", "sepal_length"],
  },

  trainingDataPoints: {
    FROM: "mcg_iris_map",
    SELECT: ["sepal_width", "sepal_length"],
    OPTS: {
      data_category: "training data",
      data_point_limit: 2000,
    },
  },

  model2DPredictions: {
    FROM: "mcg_iris_map",
    PREDICT: [
      {
        aggregation: "maximum",
        class: "Aggregation",
        name: ["sepal_width"],
        yields: "sepal_width",
      },
      {
        aggregation: "maximum",
        class: "Aggregation",
        name: ["sepal_length"],
        yields: "sepal_length",
      },
    ],
  },

  dataPredictions: {
    FROM: "__emp_iris-dataMarginals-_0_0",
    PREDICT: [
      {
        aggregation: "maximum",
        class: "Aggregation",
        name: ["sepal_width"],
        yields: "sepal_width",
      },
      {
        aggregation: "maximum",
        class: "Aggregation",
        name: ["sepal_length"],
        yields: "sepal_length",
      },
    ],
  },

  modelDensity: {
    FROM: "mcg_iris_map",
    PREDICT: [
      "sepal_length",
      "sepal_width",
      {
        name: ["sepal_length", "sepal_width"],
        aggregation: "probability",
        class: "Density",
      },
    ],
    "SPLIT BY": [
      {
        name: "sepal_length",
        split: "equiinterval",
        args: [25],
        class: "Split",
      },
      {
        name: "sepal_width",
        split: "equiinterval",
        args: [25],
        class: "Split",
      },
    ],
  },
};
export default queryTemplates;
