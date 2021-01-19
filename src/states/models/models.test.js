import * as actions from "./actions";
import * as types from "./constants";
import reducer from "./reducer";
import * as selector from "./selector";
import {
  emp_mpgDimensions,
  emptyModelStore,
  irisDimensions,
  irisModel,
  modelId1,
  modelId3,
  modelName1,
  modelName3,
  modelSelectorState,
  modelStore1,
  modelStoreAddSecondModel,
  modelStoreAfterDeletion,
  modelStoreAfterModelDeletion,
  modelStoreEmpyt,
  modelStorePCIGraphShown,
  plotId1,
  testSchemes,
  visualizationId1,
} from "./testData";

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
    const action = {
      type: types.CREATE_NEW_MODEL,
      payload: {
        modelName: modelName3,
        model: irisModel,
        id: modelId3
      }
    }
    const state = JSON.parse(JSON.stringify(emptyModelStore));
    expect(reducer(state, action)).toEqual(modelStore1)
  })
  it('Test PCI graph shown', () => {
    const action = {
      type: types.SHOW_PCI_GRAPH,
      payload: {
        id: modelId3
      }
    }
    const state = JSON.parse(JSON.stringify(modelStore1));
    expect(reducer(state, action)).toEqual(modelStorePCIGraphShown)
  })

  it('Test PCI graph not shown', () => {
    const action = {
      type: types.HIDE_PCI_GRAPH,
      payload: {
        id: modelId3
      }
    }
    const state = JSON.parse(JSON.stringify(modelStorePCIGraphShown));
    expect(reducer(state, action)).toEqual(modelStore1)
  })
  it('delete model', () => {
    const action = {
      type: types.DELETE_MODEL,
      payload: {
        id: modelId3
      }
    }
    const state = JSON.parse(JSON.stringify(modelStorePCIGraphShown));
    expect(reducer(state, action)).toEqual(modelStoreAfterModelDeletion);
  })
  it('add second model', () => {
    const action = {
      type: types.CREATE_NEW_MODEL,
      payload: {
        modelName: modelName1,
        model: emp_mpgDimensions,
        id: modelId1
      }
    }
    const state = JSON.parse(JSON.stringify(modelStore1));
    expect(reducer(state, action)).toEqual(modelStoreAddSecondModel)
  })
  it('delete model', () => {
    const action = {
      type: types.DELETE_MODEL,
      payload: {
        id: modelId1
      }
    }
    const state = JSON.parse(JSON.stringify(modelStoreAddSecondModel));
    expect(reducer(state, action)).toEqual(modelStoreAfterDeletion);
  })
  it('delete last model', () => {
    const action = {
      type: types.DELETE_MODEL,
      payload: {
        id: modelId3
      }
    }
    const state = JSON.parse(JSON.stringify(modelStoreAfterDeletion));
    expect(reducer(state, action)).toEqual(modelStoreEmpyt);
  })
})

describe("models selector unit test ", () => {
  it('should return the model name through a plot id', () => {
    expect(selector.getModelNameById(modelSelectorState, plotId1)).toEqual(modelName3);
  })
  it('should return the model name through a plot id, not possible', () => {
    const plotId = '3';
    expect(selector.getModelNameById(modelSelectorState, plotId)).toEqual('');
  })
  it('tests isIdInAllIds if modelId is in store ', () => {
    expect(selector.isIdInAllIds(modelSelectorState, modelId3)).toEqual(true);
  })
  it('tests isIdInAllIds if modelId is not in store ', () => {
    expect(selector.isIdInAllIds(modelSelectorState, modelId1)).toEqual(false);
  })
  it('test getModelIdByPlotId if modelId is in store', () => {
    expect(selector.getModelIdByPlotId(modelSelectorState, plotId1)).toEqual(modelId3);
  })
  it('test getModelIdByPlotId if modelId is not in store', () => {
    const plotId = "3";
    expect(selector.getModelIdByPlotId(modelSelectorState, plotId)).toEqual("");
  })
  it('test getModelIdByVisualisationId if modelId is in store', () => {
    expect(selector.getModelIdByVisualisationId(modelSelectorState, visualizationId1)).toEqual(modelId3);
  })
  it('test getModelIdByVisualisationId if modelId is not in store', () => {
    const visId = "3";
    expect(selector.getModelIdByVisualisationId(modelSelectorState, visId)).toEqual("");
  })
  it('test getLastCreatedModelId if modelId is in store', () => {
    expect(selector.getLastCreatedModelId(modelSelectorState)).toEqual(modelId3);
  })
  it('test getLastCreatedModelId if modelId is not in store', () => {
    expect(selector.getLastCreatedModelId({})).toEqual(null);
  })
  it('test selectSchemeNames', () => {
    expect(selector.selectSchemeNames(modelSelectorState)).toEqual(testSchemes);
  })
})

/*describe("functionality tests", () =>  {
  // TODO: add functionality tests for deleteModelIfNecessary
  const action = {
    type: types.DELETE_MODEL,
    payload: {
      id: modelId3,
    }
  }
  const { store } = create();
  expect(actions.deleteModelIfNecessary(modelId3)).toEqual(action);
})*/