import dimensions from "./reducer";

export const modelId1 = "9b322875-ed80-4a09-aec7-8d417fe50c1e";
export const modelId2 = "58bac0af-8c1d-40c2-9c86-3721ec59e26e";

export const dummyDimensions = [
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

export const dimStore = {
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

export const selectorState = [{
    state: {
        models: {
            lastCreatedModelId: modelId2,
        },
        dimensions: dimStore2,
    }
}]