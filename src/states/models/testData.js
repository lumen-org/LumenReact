import { EMPTY } from "../constants";

export const modelId1 = "9b322875-ed80-4a09-aec7-8d417fe50c1e";
export const modelName1 = "emp_mpg";
export const modelId2 = "58bac0af-8c1d-40c2-9c86-3721ec59e26e";
export const modelName2 = "emp_mpg_new";
export const modelId3 = "6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1";
export const modelName3 ="mcg_iris";
export const plotId1 = "0";
export const visualizationId1 = "7feec0c4-d2d3-4d46-8302-d89c867fc8f8";

export const emp_mpgDimensions = [
    {
      "name":"transmission",
      "domain":null,
      "extent":["auto","lock-up","manual"],
      "dtype":"string",
      "obstype":"observed",
      "hidden":false,
      "default_value":null,
      "default_subset":null,
      "independent":false
    },
    {
      "name":"cylinder",
      "domain":null,
      "extent":["few","many","medium"],
      "dtype":"string",
      "obstype":"observed",
      "hidden":false,
      "default_value":null,
      "default_subset":null,
      "independent":false
    },
    {
      "name":"car_size",
      "domain":null,
      "extent":["large","midsize","small"],
      "dtype":"string",
      "obstype":"observed",
      "hidden":false,
      "default_value":null,
      "default_subset":null,
      "independent":false
    },
    {
      "name":"year",
      "domain":[null,null],
      "extent":[1982.7,2010.3],
      "dtype":"numerical",
      "obstype":"observed",
      "hidden":false,
      "default_value":null,
      "default_subset":null,
      "independent":false
    },
    {
      "name":"mpg_city",
      "domain":[null,null],
      "extent":[1.7999999999999998,52.2],
      "dtype":"numerical",
      "obstype":"observed",
      "hidden":false,
      "default_value":null,
      "default_subset":null,
      "independent":false
    },
    {
      "name":"mpg_highway",
      "domain":[null,null],
      "extent":[4.8999999999999995,66.1],
      "dtype":"numerical",
      "obstype":"observed",
      "hidden":false,
      "default_value":null,
      "default_subset":null,
      "independent":false
    },
    {
      "name":"displacement",
      "domain":[null,null],
      "extent":[-0.8400000000000001,9.24],
      "dtype":"numerical",
      "obstype":"observed",
      "hidden":false,
      "default_value":null,
      "default_subset":null,
      "independent":false
    }
  ];

export const irisDimensions = [
  {
    "name": 'species',
    "dimId": 'idFromBackend',
    "domain": null,
    "extent": [
      'setosa',
      'versicolor',
      'virginica'
    ],
    "dtype": 'string',
    "hidden": false,
    "independent": false,
    "default_subset": null,
    "default_value": null,
    "obstype": "observed",
  },
  {
    "name": 'sepal_length',
    "dimId": 'idFromBackend',
    "domain": [
      null,
      null
    ],
    "extent": [
      3.486399999999999,
      8.792800000000002
    ],
    "dtype": 'numerical',
    "hidden": false,
    "independent": false,
    "default_subset": null,
    "default_value": null,
    "obstype": "observed",
  },
  {
    "name": 'sepal_width',
    "dimId": 'idFromBackend',
    "domain": [
      null,
      null
    ],
    "extent": [
      1.616,
      4.731200000000002
    ],
    "dtype": 'numerical',
    "hidden": false,
    "independent": false,
    "obstype": "observed",
    "default_subset": null,
    "default_value": null,
  },
  {
    "name": 'petal_length',
    "dimId": 'idFromBackend',
    "domain": [
      null,
      null
    ],
    "extent": [
      -0.9824000000000003,
      8.233400000000001
    ],
    "dtype": 'numerical',
    "hidden": false,
    "independent": false,
    "default_subset": null,
    "default_value": null,
    "obstype": "observed",
  },
  {
    "name": 'petal_width',
    "dimId": 'idFromBackend',
    "domain": [
      null,
      null
    ],
    "extent": [
      -0.8119999999999998,
      3.3063999999999996
    ],
    "dtype": 'numerical',
    "hidden": false,
    "independent": false,
    "default_subset": null,
    "default_value": null,
    "obstype": "observed",
  }
];

export const emptyModelStore = {
    lastCreatedModelId: EMPTY,
    models: {
      byId: {},
      allIds: [],
    },
}

export const modelStore1 = {
    models: {
      byId: {
        '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': {
          modelName: modelName3,
          fields: {
            species: {
              name: 'species',
              domain: null,
              extent: [
                'setosa',
                'versicolor',
                'virginica'
              ],
              dtype: 'string',
              obstype: 'observed',
              hidden: false,
              default_value: null,
              default_subset: null,
              independent: false
            },
            sepal_length: {
              name: 'sepal_length',
              domain: [
                null,
                null
              ],
              extent: [
                3.486399999999999,
                8.792800000000002
              ],
              dtype: 'numerical',
              obstype: 'observed',
              hidden: false,
              default_value: null,
              default_subset: null,
              independent: false
            },
            sepal_width: {
              name: 'sepal_width',
              domain: [
                null,
                null
              ],
              extent: [
                1.616,
                4.731200000000002
              ],
              dtype: 'numerical',
              obstype: 'observed',
              hidden: false,
              default_value: null,
              default_subset: null,
              independent: false
            },
            petal_length: {
              name: 'petal_length',
              domain: [
                null,
                null
              ],
              extent: [
                -0.9824000000000003,
                8.233400000000001
              ],
              dtype: 'numerical',
              obstype: 'observed',
              hidden: false,
              default_value: null,
              default_subset: null,
              independent: false
            },
            petal_width: {
              name: 'petal_width',
              domain: [
                null,
                null
              ],
              extent: [
                -0.8119999999999998,
                3.3063999999999996
              ],
              dtype: 'numerical',
              obstype: 'observed',
              hidden: false,
              default_value: null,
              default_subset: null,
              independent: false
            }
          },
          id: '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1',
          showPCIGraph: false
        }
      },
      allIds: [
        '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1'
      ]
    },
    lastCreatedModelId: '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1',
}

let temp = JSON.parse(JSON.stringify(irisDimensions));
temp.forEach((o) => {
  delete o.dimId;
})
export const irisModel = temp;

temp = JSON.parse(JSON.stringify(emp_mpgDimensions));
temp.forEach((o) => {
  delete o.dimId;
})
temp = JSON.parse(JSON.stringify(modelStore1))
temp.models.byId["6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1"].showPCIGraph= true;
export const modelStorePCIGraphShown = temp;

temp = JSON.parse(JSON.stringify(emptyModelStore));
temp.lastCreatedModelId = modelId3;
export const modelStoreAfterModelDeletion = temp;

let tempFields = JSON.parse(JSON.stringify(dimStore.dimensions.byDimensionName));
Object.keys(tempFields).forEach((o) => {
  delete tempFields[o].dimId;
  delete tempFields[o].models;
  tempFields[o].default_value = null;
  tempFields[o].default_subset = null;
  tempFields[o].obstype = "observed";
})

temp = JSON.parse(JSON.stringify(modelStore1));
temp.models.byId[modelId1] = {
  id: modelId1,
  modelName: modelName1,
  showPCIGraph: false,
  fields: tempFields,
};

temp.models.allIds.push(modelId1);
temp.lastCreatedModelId = modelId1;
export const modelStoreAddSecondModel = temp;

temp = temp = JSON.parse(JSON.stringify(modelStore1));
temp.lastCreatedModelId = modelId1;
export const modelStoreAfterDeletion = temp;

temp = JSON.parse(JSON.stringify(emptyModelStore));
temp.lastCreatedModelId = modelId1;
export const modelStoreEmpyt = temp;


export const modelSelectorState = {
  app: {
    activeModel: 'mcg_iris',
      activePlots: undefined,
      activeSpecification: undefined
  },
  specifications: {
    specifications: {
      byId: {
        'b4f52638-6d7f-47d6-aa4c-0e357d856663': {
          specificationType: 'STANDARD_SPECIFICATION',
            id: 'b4f52638-6d7f-47d6-aa4c-0e357d856663'
        }
      },
      allIds: [
        'b4f52638-6d7f-47d6-aa4c-0e357d856663'
      ]
    },
    activeSpecificationId: 'b4f52638-6d7f-47d6-aa4c-0e357d856663'
  },
  standardspecifications: {
    standardspecifications: {
      'b4f52638-6d7f-47d6-aa4c-0e357d856663': {
        specification: {},
        facets: {
          Prediction: {
            model: false,
              data: false
          },
          'Data Points': {
            model: false,
              data: true
          },
          Marginals: {
            model: false,
              data: true
          },
          Density: {
            model: false,
              data: false
          }
        }
      }
    }
  },
  visualizations: {
    activeVisualizationId: '7feec0c4-d2d3-4d46-8302-d89c867fc8f8',
      lastCreatedVisualizationId: '7feec0c4-d2d3-4d46-8302-d89c867fc8f8',
      visualizations: {
      byId: {
        '7feec0c4-d2d3-4d46-8302-d89c867fc8f8': {
          modelId: modelId3,
            specificationId: 'b4f52638-6d7f-47d6-aa4c-0e357d856663',
            visualizationId: '7feec0c4-d2d3-4d46-8302-d89c867fc8f8'
        }
      },
      allIds: [
        '7feec0c4-d2d3-4d46-8302-d89c867fc8f8'
      ]
    }
  },
  models: {
    models: {
      byId: {
        '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': {
          modelName: 'mcg_iris',
            fields: {
            species: {
              name: 'species',
                domain: null,
                extent: [
                'setosa',
                'versicolor',
                'virginica'
              ],
                dtype: 'string',
                obstype: 'observed',
                hidden: false,
                default_value: null,
                default_subset: null,
                independent: false
            },
            sepal_length: {
              name: 'sepal_length',
                domain: [
                null,
                null
              ],
                extent: [
                3.486399999999999,
                8.792800000000002
              ],
                dtype: 'numerical',
                obstype: 'observed',
                hidden: false,
                default_value: null,
                default_subset: null,
                independent: false
            },
            sepal_width: {
              name: 'sepal_width',
                domain: [
                null,
                null
              ],
                extent: [
                1.616,
                4.731200000000002
              ],
                dtype: 'numerical',
                obstype: 'observed',
                hidden: false,
                default_value: null,
                default_subset: null,
                independent: false
            },
            petal_length: {
              name: 'petal_length',
                domain: [
                null,
                null
              ],
                extent: [
                -0.9824000000000003,
                8.233400000000001
              ],
                dtype: 'numerical',
                obstype: 'observed',
                hidden: false,
                default_value: null,
                default_subset: null,
                independent: false
            },
            petal_width: {
              name: 'petal_width',
                domain: [
                null,
                null
              ],
                extent: [
                -0.8119999999999998,
                3.3063999999999996
              ],
                dtype: 'numerical',
                obstype: 'observed',
                hidden: false,
                default_value: null,
                default_subset: null,
                independent: false
            }
          },
          id: '752a407d-8213-4d87-b086-a42eb439e6f9',
            showPCIGraph: false
        }
      },
      allIds: [
        '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1'
      ]
    },
    lastCreatedModelId: '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1'
  },
  dimensions: {
    dimensions: {
      byDimensionName: {
        species: {
          name: 'species',
            dimId: 'idFromBackend',
            domain: null,
            extent: [
            'setosa',
            'versicolor',
            'virginica'
          ],
            dtype: 'string',
            hidden: false,
            independent: false,
            models: {
            '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': 'mcg_iris'
          }
        },
        sepal_length: {
          name: 'sepal_length',
            dimId: 'idFromBackend',
            domain: [
            null,
            null
          ],
            extent: [
            3.486399999999999,
            8.792800000000002
          ],
            dtype: 'numerical',
            hidden: false,
            independent: false,
            models: {
            '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': 'mcg_iris'
          }
        },
        sepal_width: {
          name: 'sepal_width',
            dimId: 'idFromBackend',
            domain: [
            null,
            null
          ],
            extent: [
            1.616,
            4.731200000000002
          ],
            dtype: 'numerical',
            hidden: false,
            independent: false,
            models: {
            '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': 'mcg_iris'
          }
        },
        petal_length: {
          name: 'petal_length',
            dimId: 'idFromBackend',
            domain: [
            null,
            null
          ],
            extent: [
            -0.9824000000000003,
            8.233400000000001
          ],
            dtype: 'numerical',
            hidden: false,
            independent: false,
            models: {
            '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': 'mcg_iris'
          }
        },
        petal_width: {
          name: 'petal_width',
            dimId: 'idFromBackend',
            domain: [
            null,
            null
          ],
            extent: [
            -0.8119999999999998,
            3.3063999999999996
          ],
            dtype: 'numerical',
            hidden: false,
            independent: false,
            models: {
            '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': 'mcg_iris'
          }
        }
      }
    }
  },
  plots: {
    plots: {
      byId: {
        '0': {
          id: 0,
            model: 'mcg_iris',
            visualizationId: '7feec0c4-d2d3-4d46-8302-d89c867fc8f8',
            specificationId: 'b4f52638-6d7f-47d6-aa4c-0e357d856663',
            plotType: 'STANDARD_PLOT',
            zIndex: 0,
            show: true
        }
      },
      allIds: [
        0
      ]
    },
    activePlotId: 0,
      lastCreatedId: 0
  },
  standardplots: {
    standardPlots: {
      '0': {
        loading: false,
          categories: [
          'all'
        ],
          modelDataPoints: {
          x: {},
          y: {}
        },
        trainingDataPoints: {
          x: {},
          y: {}
        },
        modelMarginals: {
          xAxis: {
            x: [],
              y: []
          },
          yAxis: {
            x: [],
              y: []
          }
        },
        dataMarginals: {
          xAxis: {
            x: [],
              y: []
          },
          yAxis: {
            x: [],
              y: []
          }
        },
        modelDensity: {
          x: [],
            y: [],
            z: []
        },
        dataDensity: {
          x: [],
            y: [],
            z: []
        },
        dataPrediction: {
          x: [],
            y: []
        },
        modelPrediction: {
          x: [],
            y: []
        }
      }
    }
  },
  multiplots: {
    multiPlots: {},
    layout: {},
    status: 'ok'
  }
}

export const testSchemes = {
  "categorical": [
    "species"
  ],
  "quantitative": [
    "sepal_length",
    "sepal_width",
    "petal_length",
    "petal_width"
  ]
}
export const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  }
  const next = jest.fn()

  const invoke = action => thunk(store)(next)(action)

  return { store, next, invoke }
}