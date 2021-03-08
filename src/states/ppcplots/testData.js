export const plotId = "1";
export const x = 5.8;
export const start = 4;
export const end = 8;
export const values = {
  results: [3,4,4]
}
export const loadingTrueValues = {loading: true};

export const emptyPPCStore =
{
  ppcplots: {}
}

export const rawState = {
  app: {
    activeModel: 'mcg_iris',
      activePlots: undefined,
      activeSpecification: undefined
  },
  specifications: {
    specifications: {
      byId: {
        'fd9d4684-72ed-46b7-8803-bd13b0b6f7cb': {
          specificationType: 'STANDARD_SPECIFICATION',
            id: 'fd9d4684-72ed-46b7-8803-bd13b0b6f7cb'
        },
        '928951c4-5a6c-4b6c-a27a-70e0fc5cedba': {
          specificationType: 'PPC_SPECIFICATION',
            id: '928951c4-5a6c-4b6c-a27a-70e0fc5cedba'
        }
      },
      allIds: [
        'fd9d4684-72ed-46b7-8803-bd13b0b6f7cb',
        '928951c4-5a6c-4b6c-a27a-70e0fc5cedba'
      ]
    },
    activeSpecificationId: '928951c4-5a6c-4b6c-a27a-70e0fc5cedba'
  },
  visualizations: {
    activeVisualizationId: 'aa97283a-c4d6-4c00-becb-9630e37a02dd',
      lastCreatedVisualizationId: 'aa97283a-c4d6-4c00-becb-9630e37a02dd',
      visualizations: {
      byId: {
        '21174074-e745-4020-9ff8-a9c4aa7d3313': {
          modelId: '0ce6d4a8-aba7-4ac4-88e4-bbbe2c1022a1',
            specificationId: 'fd9d4684-72ed-46b7-8803-bd13b0b6f7cb',
            visualizationId: '21174074-e745-4020-9ff8-a9c4aa7d3313'
        },
        'aa97283a-c4d6-4c00-becb-9630e37a02dd': {
          modelId: '0ce6d4a8-aba7-4ac4-88e4-bbbe2c1022a1',
            specificationId: '928951c4-5a6c-4b6c-a27a-70e0fc5cedba',
            visualizationId: 'aa97283a-c4d6-4c00-becb-9630e37a02dd'
        }
      },
      allIds: [
        '21174074-e745-4020-9ff8-a9c4aa7d3313',
        'aa97283a-c4d6-4c00-becb-9630e37a02dd'
      ]
    }
  },
  models: {
    models: {
      byId: {
        '0ce6d4a8-aba7-4ac4-88e4-bbbe2c1022a1': {
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
          id: '0ce6d4a8-aba7-4ac4-88e4-bbbe2c1022a1',
            showPCIGraph: false
        }
      },
      allIds: [
        '0ce6d4a8-aba7-4ac4-88e4-bbbe2c1022a1'
      ]
    },
    lastCreatedModelId: '0ce6d4a8-aba7-4ac4-88e4-bbbe2c1022a1'
  },
  dimensions: {
  },
  plots: {
    plots: {
      byId: {
        '0': {
          id: 0,
            model: 'mcg_iris',
            visualizationId: '21174074-e745-4020-9ff8-a9c4aa7d3313',
            specificationId: 'fd9d4684-72ed-46b7-8803-bd13b0b6f7cb',
            plotType: 'STANDARD_PLOT',
            zIndex: 0,
            show: true
        },
        '1': {
          id: 1,
            model: 'mcg_iris',
            visualizationId: 'aa97283a-c4d6-4c00-becb-9630e37a02dd',
            specificationId: '928951c4-5a6c-4b6c-a27a-70e0fc5cedba',
            plotType: 'PPC_PLOT',
            zIndex: 1,
            show: true
        }
      },
      allIds: [
        0,
        1
      ]
    },
    activePlotId: 1,
      lastCreatedId: 1
  },
  standardspecifications: {
    standardspecifications: {
      'fd9d4684-72ed-46b7-8803-bd13b0b6f7cb': {
        specification: {},
        facets: {
          Aggregation: {
            model: false,
              data: false
          },
          Samples: {
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
            x: {},
            y: {}
          },
          yAxis: {
            x: {},
            y: {}
          }
        },
        dataMarginals: {
          xAxis: {
            x: {},
            y: {}
          },
          yAxis: {
            x: {},
            y: {}
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
  multispecifications: {
    multispecifications: {}
  },
  multiplots: {
    multiPlots: {},
    layout: {},
    status: 'ok'
  },
  ppcplots: {
    ppcplots: {
      '1': {
        loading: false,
        layout: {
          bargap: 0.05,
          autosize: true,
          showgrid: false,
          title: {
            text: 'PPC Plot'
          },
          shapes: [
            {
              type: 'line',
              x0: 5.8,
              y0: 0,
              x1: 5.8,
              yref: 'paper',
              y1: 1,
              name: 'reference',
              line: {
                color: 'orange',
                width: 1.5
              }
            }
          ],
          xaxis: {
            range: [
              4.600000000000001,
              7.600000000000003
            ],
            autorange: true,
            type: 'linear'
          },
          yaxis: {
            range: [
              0,
              5.2631578947368425
            ],
            autorange: true
          }
        },
        data: [
          {
            x: [
              4.61886935695812,
              4.890181468369033,
              5.0722523088546465,
              5.1045264320224994,
              5.104572768785271,
              5.1542134778625925,
              5.154407017539951,
              5.304225629293814,
              5.47109736017945,
              5.606232405302414,
              5.6949766884472295,
              5.743259369064208,
              5.780598092371984,
              5.83975737859173,
              5.8765324407929835,
              5.9745029639571765,
              6.07032457596429,
              6.124086834484809,
              6.163986455209307,
              6.32105912126436,
              6.561591495486255,
              6.56988048603623,
              6.623546829353684,
              7.410974942685991
            ],
            type: 'histogram',
            name: 'ppc values',
            marker: {
              line: {
                width: 1
              }
            },
            xbins: {
              start: 4,
              end: 8,
              size: 0.2
            }
          }
        ],
        reference: 5.8
      }
    }

  },
  ppcspecifications: {
    ppcspecifications: {
      '928951c4-5a6c-4b6c-a27a-70e0fc5cedba': {
        statistic: 'median',
          k: 2,
          n: '24',
          selectedFields: {}
      }
    }
  }
}


export const PPCStoreOnePlot = {
  "ppcplots": {
    "1": {
      "data": [
        {
          "marker": {
            "line": {
              "width": 1
            }
          },
          "name": "ppc values",
          "type": "histogram",
          "x": [],
          "xbins": {
            "end": 1,
            "size": 0.2,
            "start": 0
          }
        }
      ],
      "layout": {
        "autosize": true,
        "bargap": 0.05,
        "shapes": [
          {
            "line": {
              "color": "orange",
              "width": 1.5
            },
            "name": "reference",
            "type": "line",
            "x0": 0,
            "x1": 0,
            "y0": 0,
            "y1": 1,
            "yref": "paper"
          }
        ],
        "showgrid": false,
        "title": {
          "text": "PPC Plot"
        },

      "xaxis": {
        "autorange": true,
        "range": [
          4.600000000000001,
          7.600000000000003
        ],
        "type": "linear"
      },
      "yaxis": {
        "autorange": true,
        "range": [
          0,
          5.2631578947368425
        ]
      }
    },
      "loading": false,
    }
  }
}

export const newPPCStore = {
  "ppcplots": {
    "1": {
      "data": [
        {
          "marker": {
            "line": {
              "width": 1
            }
          },
          "name": "ppc values",
          "type": "histogram",
          "x": [],
          "xbins": {
            "end": 1,
            "size": 0.2,
            "start": 0
          }
        }
      ],
      "layout": {
        "autosize": true,
        "bargap": 0.05,
        "shapes": [
          {
            "line": {
              "color": "orange",
              "width": 1.5
            },
            "name": "reference",
            "type": "line",
            "x0": 0,
            "x1": 0,
            "y0": 0,
            "y1": 1,
            "yref": "paper"
          }
        ],
        "showgrid": false,
        "title": {
          "text": "PPC Plot"
        }
      },
      "loading": false
    }
  }
}


export const PPCStoreAfterFilling =
  {
    "ppcplots": {
      "1": {
        "data": [
          {
            "marker": {
              "line": {
                "width": 1
              }
            },
            "name": "ppc values",
            "type": "histogram",
            "x": 5.8,
            "xbins": {
              "end": 8,
              "size": 0.2,
              "start": 4
            }
          }
        ],
        "layout": {
          "autosize": true,
          "bargap": 0.05,
          "shapes": [
            {
              "line": {
                "color": "orange",
                "width": 1.5
              },
              "name": "reference",
              "type": "line",
              "x0": 0,
              "x1": 0,
              "y0": 0,
              "y1": 1,
              "yref": "paper"
            }
          ],
          "showgrid": false,
          "title": {
            "text": "PPC Plot"
          },
          "xaxis": {
            "autorange": true,
            "range": [
              4.600000000000001,
              7.600000000000003
            ],
            "type": "linear"
          },
          "yaxis": {
            "autorange": true,
            "range": [
              0,
              5.2631578947368425
            ]
          }
        },
        "loading": false
      }
    }
  };

let temp = JSON.parse(JSON.stringify(PPCStoreOnePlot));
temp.ppcplots['1'].loading = true

export const StoreLoadingTrue = temp;

temp = JSON.parse(JSON.stringify(PPCStoreAfterFilling));
temp.ppcplots['1'].layout.shapes[0].x0 = x;
temp.ppcplots['1'].layout.shapes[0].x1 = x;

export const PPCStoreLayout = temp;

export const PPCLayout = PPCStoreLayout.ppcplots['1'].layout;

export const PPCdata = [
  {
    x: [
      4.61886935695812,
      4.890181468369033,
      5.0722523088546465,
      5.1045264320224994,
      5.104572768785271,
      5.1542134778625925,
      5.154407017539951,
      5.304225629293814,
      5.47109736017945,
      5.606232405302414,
      5.6949766884472295,
      5.743259369064208,
      5.780598092371984,
      5.83975737859173,
      5.8765324407929835,
      5.9745029639571765,
      6.07032457596429,
      6.124086834484809,
      6.163986455209307,
      6.32105912126436,
      6.561591495486255,
      6.56988048603623,
      6.623546829353684,
      7.410974942685991
    ],
    type: 'histogram',
    name: 'ppc values',
    marker: {
      line: {
        width: 1
      }
    },
    xbins: {
      start: 4,
      end: 8,
      size: 0.2
    }
  }
];

export const StoreFromRedux =
  {
  ppcplots: {
    '1': {
      loading: false,
      layout: {
        bargap: 0.05,
        autosize: true,
        showgrid: false,
        title: {
          text: 'PPC Plot'
        },
        shapes: [
          {
            type: 'line',
            x0: 5.8,
            y0: 0,
            x1: 5.8,
            yref: 'paper',
            y1: 1,
            name: 'reference',
            line: {
              color: 'orange',
              width: 1.5
            }
          }
        ],
        xaxis: {
          range: [
            4.600000000000001,
            7.600000000000003
          ],
          autorange: true,
          type: 'linear'
        },
        yaxis: {
          range: [
            0,
            5.2631578947368425
          ],
          autorange: true
        }
      },
      data: [
        {
          x: [
            4.61886935695812,
            4.890181468369033,
            5.0722523088546465,
            5.1045264320224994,
            5.104572768785271,
            5.1542134778625925,
            5.154407017539951,
            5.304225629293814,
            5.47109736017945,
            5.606232405302414,
            5.6949766884472295,
            5.743259369064208,
            5.780598092371984,
            5.83975737859173,
            5.8765324407929835,
            5.9745029639571765,
            6.07032457596429,
            6.124086834484809,
            6.163986455209307,
            6.32105912126436,
            6.561591495486255,
            6.56988048603623,
            6.623546829353684,
            7.410974942685991
          ],
          type: 'histogram',
          name: 'ppc values',
          marker: {
            line: {
              width: 1
            }
          },
          xbins: {
            start: 4,
            end: 8,
            size: 0.2
          }
        }
      ],
      reference: 5.8
    }
  }
}
