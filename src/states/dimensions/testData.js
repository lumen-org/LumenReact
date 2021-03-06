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

export const emptyDimStore = {
  dimensions: {
    byDimensionName: {
    }
  }
}
export const dimStore = {
    dimensions: {
      byDimensionName: {
        "transmission": {
          "name":"transmission",
          "dimId":"idFromBackend",
          "domain": null,
          "extent":["auto","lock-up","manual"],
          "dtype":"string",
          "hidden":false,
          "independent":false,
          "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg"}
        },
        "cylinder":{
          "name":"cylinder",
          "dimId":"idFromBackend",
          "domain":null,
          "extent":["few","many","medium"],
          "dtype":"string",
          "hidden":false,
          "independent":false,
          "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg"}
        },
        "car_size":{
          "name":"car_size",
          "dimId":"idFromBackend",
          "domain":null,
          "extent":["large","midsize","small"],
          "dtype":"string",
          "hidden":false,
          "independent":false,
          "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg"}
        },
        "year":{
          "name":"year",
          "dimId":"idFromBackend",
          "domain":[null,null],
          "extent":[1982.7,2010.3],
          "dtype":"numerical",
          "hidden":false,
          "independent":false,
          "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg"}
        },
        "mpg_city":{
          "name":"mpg_city",
          "dimId":"idFromBackend",
          "domain":[null,null],
          "extent":[1.7999999999999998,52.2],
          "dtype":"numerical",
          "hidden":false,
          "independent":false,
          "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg"}
        },
        "mpg_highway":{
          "name":"mpg_highway",
          "dimId":"idFromBackend",
          "domain":[null,null],
          "extent":[4.8999999999999995,66.1],
          "dtype":"numerical",
          "hidden":false,
          "independent":false,
          "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg"}
        },
        "displacement":{
          "name":"displacement",
          "dimId":"idFromBackend",
          "domain":[null,null],
          "extent":[-0.8400000000000001,9.24],
          "dtype":"numerical",
          "hidden":false,
          "independent":false,
          "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg"}
        }
      }}
    } 

export const dimStore2 =  {
    dimensions: {
    byDimensionName: {
      "transmission": {
        "name":"transmission",
        "dimId":"idFromBackend",
        "domain":null,
        "extent":["auto","lock-up","manual"],
        "dtype":"string",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "cylinder":{
        "name":"cylinder",
        "dimId":"idFromBackend",
        "domain":null,
        "extent":["few","many","medium"],
        "dtype":"string",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "car_size":{
        "name":"car_size",
        "dimId":"idFromBackend",
        "domain":null,
        "extent":["large","midsize","small"],
        "dtype":"string",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "year":{
        "name":"year",
        "dimId":"idFromBackend",
        "domain":[null,null],
        "extent":[1982.7,2010.3],
        "dtype":"numerical",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "mpg_city":{
        "name":"mpg_city",
        "dimId":"idFromBackend",
        "domain":[null,null],
        "extent":[1.7999999999999998,52.2],
        "dtype":"numerical",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "mpg_highway":{
        "name":"mpg_highway",
        "dimId":"idFromBackend",
        "domain":[null,null],
        "extent":[4.8999999999999995,66.1],
        "dtype":"numerical",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "displacement":{
        "name":"displacement",
        "dimId":"idFromBackend",
        "domain":[null,null],
        "extent":[-0.8400000000000001,9.24],
        "dtype":"numerical",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      }
    }}
  }

export const dimStore3 =  {
  dimensions: {
    byDimensionName: {
      "transmission": {
        "name":"transmission",
        "dimId":"idFromBackend",
        "domain":null,
        "extent":["auto","lock-up","manual"],
        "dtype":"string",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "cylinder":{
        "name":"cylinder",
        "dimId":"idFromBackend",
        "domain":null,
        "extent":["few","many","medium"],
        "dtype":"string",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "car_size":{
        "name":"car_size",
        "dimId":"idFromBackend",
        "domain":null,
        "extent":["large","midsize","small"],
        "dtype":"string",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "year":{
        "name":"year",
        "dimId":"idFromBackend",
        "domain":[null,null],
        "extent":[1982.7,2010.3],
        "dtype":"numerical",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "mpg_city":{
        "name":"mpg_city",
        "dimId":"idFromBackend",
        "domain":[null,null],
        "extent":[1.7999999999999998,52.2],
        "dtype":"numerical",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "mpg_highway":{
        "name":"mpg_highway",
        "dimId":"idFromBackend",
        "domain":[null,null],
        "extent":[4.8999999999999995,66.1],
        "dtype":"numerical",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "displacement":{
        "name":"displacement",
        "dimId":"idFromBackend",
        "domain":[null,null],
        "extent":[-0.8400000000000001,9.24],
        "dtype":"numerical",
        "hidden":false,
        "independent":false,
        "models":{"9b322875-ed80-4a09-aec7-8d417fe50c1e":"emp_mpg", "58bac0af-8c1d-40c2-9c86-3721ec59e26e":"emp_mpg_new"}
      },
      "species": {
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
        "models": {
          '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': 'mcg_iris'
        }
      },
      "sepal_length": {
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
        "models": {
          '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': 'mcg_iris'
        }
      },
      "sepal_width": {
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
        "models": {
          '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': 'mcg_iris'
        }
      },
      "petal_length": {
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
        "models": {
          '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': 'mcg_iris'
        }
      },
      "petal_width": {
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
        "models": {
          '6b8c9fd5-6e9f-4ca8-a7f6-e3002f668ab1': 'mcg_iris'
        }
      }
    }}
}
export const selectorState = [{
    state: {
        models: {
          lastCreatedModelId: modelId2,
          byId: {
            "9b322875-ed80-4a09-aec7-8d417fe50c1e": modelId1,
            "58bac0af-8c1d-40c2-9c86-3721ec59e26e": modelId2,
          }
        },
      dimensions: {
        dimensions: {
          byDimensionName: dimStore2
        },
      }

    }
}]
