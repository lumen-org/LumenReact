const queryTemplates = {
  marginal: {
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
    OPTS: {
      data_category: "model samples",
      data_point_limit: 2000,
      number_of_samples: 200,
    },
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

  density: {
    prediction: {
      name: ["dimension1", "dimension2"],
      aggregation: "probability",
      class: "Density",
    },

    split: {
      name: "dimension_name",
      split: "equiinterval",
      args: [25],
      class: "Split",
    },
  },
};
export default queryTemplates;
