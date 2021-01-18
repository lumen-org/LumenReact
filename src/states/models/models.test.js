import * as actions from "./actions";
import * as types from "./constants";
import reducer from "./reducer";
//import * as selector from './selector';
import {
  emptyModelStore,
  irisDimensions,
  modelId3,
  modelName1,
  modelName3,
  modelStore1,
  irisModel, modelStorePCIGraphShown, modelStoreAfterModelDeletion
} from "../../mockdata/testData";

describe('model actions', () => {
  it('test CREATE_NEW_MODEL', () => {
    const modelName = modelName3;
    const model = irisDimensions;
    const id = modelId3;
    const expectedAction = {
      type: types.CREATE_NEW_MODEL,
      payload: {
        modelName,
        model,
        id
      }
    };
    expect(actions.createNewModel(modelName, model, id)).toEqual(expectedAction);
  })

  it('test SHOW_PCI_GRAPH', () => {
    const id = modelId3;
    const expectedAction = {
      type: types.SHOW_PCI_GRAPH,
      payload: {
        id
      }
    };
    expect(actions.showPCIGraph(id)).toEqual(expectedAction);
  })

  it('test HIDE_PCI_GRAPH', () => {
    const id = modelId3;
    const expectedAction = {
      type: types.HIDE_PCI_GRAPH,
      payload: {
        id
      }
    };
    expect(actions.hidePCIGraph(id)).toEqual(expectedAction);
  })

  it('UPDATE_MODEL_DIMENSIONS', () => {
    const id = modelId3;
    const dimensions = irisDimensions;
    const expectedAction = {
      type: types.UPDATE_MODEL_DIMENSIONS,
      payload: {
        id,
        dimensions
      }
    };
    expect(actions.updateModelDimensions(id, dimensions)).toEqual(expectedAction);
  })

  it('DELETE_MODEL',() => {
    const id = modelId3;
    const expectedAction = {
      type: types.DELETE_MODEL,
      payload: {
        id
      }
    };
    expect(actions._deleteModel(id)).toEqual(expectedAction);
  })
});

describe('models reducer', () => {
  it('initial state', () => {
    const action = {};
    expect(reducer(undefined, action)).toEqual(emptyModelStore);
  })
  it('Test add to store_MODEL', () => {
    const modelName = modelName3;
    const modelId = modelId3;
    const model = irisModel;
    const action = {
      type: types.CREATE_NEW_MODEL,
      payload: {
        modelName: modelName,
        model: model,
        id: modelId
      }
    }
    const state = JSON.parse(JSON.stringify(emptyModelStore));
    expect(reducer(state, action)).toEqual(modelStore1)
  })
  it('Test PCI graph shown', () => {
    const modelId = modelId3;
    const action = {
      type: types.SHOW_PCI_GRAPH,
      payload: {
        id: modelId
      }
    }
    const state = JSON.parse(JSON.stringify(modelStore1));
    expect(reducer(state, action)).toEqual(modelStorePCIGraphShown)
  })
  it('Test PCI graph not shown', () => {
    const modelId = modelId3;
    const action = {
      type: types.HIDE_PCI_GRAPH,
      payload: {
        id: modelId
      }
    }
    const state = JSON.parse(JSON.stringify(modelStorePCIGraphShown));
    expect(reducer(state, action)).toEqual(modelStore1)
  })
  it('delete model', () => {
    const modelId = modelId3;
    const action = {
      type: types.DELETE_MODEL,
      payload: {
        id: modelId
      }
    }
    const state = JSON.parse(JSON.stringify(modelStorePCIGraphShown));
    expect(reducer(state, action)).toEqual(modelStoreAfterModelDeletion)
  })
})
/*
describe('models reducer', () => {
  it('should handle ADD_ALL_DIMENSIONS', () => {
    /// first: empty store, first dimensions
    const action = {
      type: types.ADD_ALL_DIMENSIONS,
      payload: {
        modelId: modelId1,
        modelName: "emp_mpg",
        dimensions: emp_mpgDimensions,
      }
    };
    expect(
      reducer(undefined, action)
    ).toEqual(dimStore);
  })
  it('compare dimensions and add model id to models', () => {
    const action = {
      type: types.ADD_ALL_DIMENSIONS,
      payload: {
        modelId: modelId2,
        modelName: "emp_mpg_new",
        dimensions: emp_mpgDimensions,
      }
    };
    const state = JSON.parse(JSON.stringify(dimStore));
    expect(
      //// second: same model -> compare dimensions and add model id to models
      reducer(state, action)).toEqual(dimStore2);
  })
  it('should add the dimensions to the dimstore and keep the others', () => {
    const action = {
      type: types.ADD_ALL_DIMENSIONS,
      payload: {
        modelId: modelId3,
        modelName: "mcg_iris",
        dimensions: irisDimensions,
      }
    };
    const state = JSON.parse(JSON.stringify(dimStore2));
    expect(reducer(state, action)).toEqual(dimStore3);
  })
})

describe('dimensions reducer DELETE_DIMENSIONS', () => {
  it('should delete modelId3 for irisDimension and delete them', () => {
    const action = {
      type: types.DELETE_DIMENSIONS,
      payload: {
        modelId: modelId3,
      }
    };
    const state = JSON.parse(JSON.stringify(dimStore3));
    expect(reducer(state, action)).toEqual(dimStore2);
  })
  it('deletes modelId2 from dimensions.models', () => {
    const action = {
      type: types.DELETE_DIMENSIONS,
      payload: {
        modelId: modelId2,
      }
    };
    const state = JSON.parse(JSON.stringify(dimStore2));
    expect(reducer(state, action)).toEqual(dimStore);
  })

  it('deletes modelId1 from dimensions.models and returns empty store', () => {
    const action = {
      type: types.DELETE_DIMENSIONS,
      payload: {
        modelId: modelId1,
      }
    };
    const state = JSON.parse(JSON.stringify(dimStore));
    expect(reducer(state, action)).toEqual(emptyDimStore);
  })
})

/*describe("dimensions selector unit test ", () => {
  it('should return the dummy dimensions', () => {
    expect(selector.default(selectorState)).toEqual(emp_mpgDimensions)
  })
})*/



