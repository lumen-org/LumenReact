import * as actions from "./actions";
import * as types from "./constants";
import reducer from "./reducer";
import * as selector from "./selector";
import {
  emptyPPCStore,
  end, loadingTrueValues, newPPCStore,
  plotId, PPCdata, PPCLayout, PPCStoreAfterFilling, PPCStoreLayout, PPCStoreOnePlot,
  rawState, start, StoreFromRedux, StoreLoadingTrue,
  values, x
} from "./testData";
import { ADD_DATA_TO_PPC_PLOT, DELETE_PPC_PLOT } from "./constants";

describe('ppcplots actions', () => {
  it('test CREATE_NEW_PPC_PLOT', () => {
    const id = plotId;
    const expectedAction = {
      type: types.CREATE_NEW_PPC_PLOT,
      payload: {
        id: id,
      }
    };
    expect(actions._createNewPPCPlot(id)).toEqual(expectedAction);
  })

  it('test ADD_DATA_TO_PPC_PLOT', () => {
    const id = plotId;
    const x_val = x;
    const min = start;
    const max = end;
    const expectedAction = {
      type: types.ADD_DATA_TO_PPC_PLOT,
      payload: {
        id: id,
        x: x_val,
        min: min,
        max: max,
      }
    };
    expect(actions.addDataToPPCPlot(id, x_val, min, max)).toEqual(expectedAction);
  })

  it('test CHANGE_PPC_PLOT', () => {
    const id = plotId;
    const _values = values;
    const expectedAction = {
      type: types.CHANGE_PPC_PLOT,
      payload: {
        id: id,
        values: _values,
      }
    };
    expect(actions.changePPCPlot(id, _values)).toEqual(expectedAction);
  })

  it('CHANGE_PPC_PLOT_LAYOUT', () => {
    const id = plotId;
    const x_vals = x;
    const expectedAction = {
      type: types.CHANGE_PPC_PLOT_LAYOUT,
      payload: {
        id: id,
        x_vals: x_vals,
      }
    };
    expect(actions.addLayoutToPPCPlot(id, x_vals)).toEqual(expectedAction);
  })

  it('DELETE_PPC_PLOT',() => {
    const id = plotId;
    const expectedAction = {
      type: types.DELETE_PPC_PLOT,
      payload: {
        id
      }
    };
    expect(actions.deletePPCPlot(id)).toEqual(expectedAction);
  })
});

describe('ppcplots reducer', () => {
  it('initial state', () => {
    const action = {};
    expect(reducer(undefined, action)).toEqual(emptyPPCStore);
  })

  it('Test create new PPC_Plot in store', () => {
    const action = {
      type: types.CREATE_NEW_PPC_PLOT,
      payload: {
        id: plotId
      }
    }
    const state = JSON.parse(JSON.stringify(emptyPPCStore));
    expect(reducer(state, action)).toEqual(newPPCStore)
  })

  it('test addDataToPPCPlot', () => {
    const id = plotId;
    const x_val = x;
    const min = start;
    const max = end;
    const action = {
      type: types.ADD_DATA_TO_PPC_PLOT,
      payload: {
        id: id,
        x: x_val,
        min: min,
        max: max,
      }
    };
    const state = JSON.parse(JSON.stringify(PPCStoreOnePlot));
    expect(reducer(state, action)).toEqual(PPCStoreAfterFilling)
  })

  it('Test delete PPC Plot', () => {
    const id = plotId;
    const action = {
      type: types.DELETE_PPC_PLOT,
      payload: {
        id: id,
      }
    }
    const state = JSON.parse(JSON.stringify(PPCStoreOnePlot));
    expect(reducer(state, action)).toEqual(emptyPPCStore)
  })

  it('test change PPC Plot ', () => {
    const action = {
      type: types.CHANGE_PPC_PLOT,
      payload: {
        id: plotId,
        values: loadingTrueValues
      }
    }
    const state = JSON.parse(JSON.stringify(PPCStoreOnePlot));
    expect(reducer(state, action)).toEqual(StoreLoadingTrue);
  })

  it('test CHANGE_PPC_PLOT_LAYOUT', () => {
    const action = {
      type: types.CHANGE_PPC_PLOT_LAYOUT,
      payload: {
        id: plotId,
        x_vals: x,
      }
    }
    const state = JSON.parse(JSON.stringify(PPCStoreAfterFilling));
    expect(reducer(state, action)).toEqual(PPCStoreLayout)
  })
})

describe("ppc plots selector unit test ", () => {
  it('should return the loading state through a plot id', () => {
    expect(selector.getPPCLoadingState(rawState, plotId)).toEqual(false);
  })
  it('should return the ppc layout', () => {
    expect(selector.getPPCLayout(rawState, plotId)).toEqual(PPCLayout);
  })
  it('tests getPPCPlotData', () => {
    expect(selector.getPPCPlotData(rawState, plotId)).toEqual(PPCdata);
  })
  it('tests getPPCPlotData not found ', () => {
    expect(selector.getPPCPlotData(rawState, '3')).toEqual([]);
  })
})
