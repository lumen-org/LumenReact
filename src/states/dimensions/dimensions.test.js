import * as actions from './actions';
import * as types from './constants';
import reducer from './reducer';
import selector from './selector';
import {
  dimStore,
  modelId1,
  modelId2,
  dummyDimensions,
  dimStore2,
  selectorState,
  emptyDimStore, modelId3, dimStore3, irisDimensions
} from "./testData";

describe('actions', () => {
    it('should create an action to add the given dimensions', () => {
        const dimensions = [
            {
                "name": "userId",
                "dtype": "string",
            },
            {
                "fegrt": "dkei",
                "name": "hidden",
            }

        ]; 
        const modelId = modelId1;
        const modelName = 'Finish docs'
        const expectedAction = {
            type: types.ADD_ALL_DIMENSIONS,
            payload: {
                modelId,
                modelName,
                dimensions,
        }
      }
      expect(actions._addAllDimensions(modelId, modelName, dimensions)).toEqual(expectedAction)
    })

  it("should delete dimensions", () => {
    const modelId = modelId1;
    const expectedAction = {
      type: types.DELETE_DIMENSIONS,
      payload: {
        modelId: modelId
      }
    }
    expect(actions._deleteDimensions(modelId)).toEqual(expectedAction);
    }
  )
 /* it("should delete dimensions after model check", () => {
    const modelId = modelId1;
    const expectedAction = {
      type: types.DELETE_DIMENSIONS,
      payload: {
        modelId: modelId
      }
    }
    const state = selectorState;
    expect(actions.deleteDimensions(modelId)).toEqual(expectedAction);
  })*/
  });
  
describe('dimensions reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
          dimensions: {
            byDimensionName: {},
          }
        }
      )
    })
  
    it('should handle ADD_ALL_DIMENSIONS', () => {
      /// first: empty store, first dimensions
      expect(
        reducer(undefined, {
          type: types.ADD_ALL_DIMENSIONS,
          payload: {
            modelId: modelId1,
            modelName: "emp_mpg",
            dimensions: dummyDimensions,
          }
        })
      ).toEqual(dimStore) 
    })
  it('compare dimensions and add model id to models', () => {
    expect(
      //// second: same model -> compare dimensions and add model id to models
      reducer(dimStore, {
        type: types.ADD_ALL_DIMENSIONS,
        payload: {
          modelId: modelId2,
          modelName: "emp_mpg_new",
          dimensions: dummyDimensions,
        }
      })).toEqual(dimStore2)

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
    expect(reducer(dimStore2, action)).toEqual(dimStore3)
  })
  })

describe('dimensions reducer 2', () => {
  it('should delete modelId3 for irisDimension and delete them', () => {
    const action = {
      type: types.DELETE_DIMENSIONS,
      payload: {
        modelId: modelId3,
      }
    }
    expect(reducer(dimStore3, action)).toEqual(dimStore2);
  })
  it('deletes modelId2 from dimensions.models', () => {
    expect(reducer(dimStore2, {
      type: types.DELETE_DIMENSIONS,
      payload: {
        modelId: modelId2,
      }
    })).toEqual(dimStore)
  })
  it('deletes modelId1 from dimensions.models and returns empty store', () => {
    expect(reducer(dimStore, {
      type: types.DELETE_DIMENSIONS,
      payload: {
        modelId: modelId1,
      }
    })).toEqual(emptyDimStore)
  })
})

/*describe("dimensions selector unit test ", () => {
  it('should return the dummy dimensions', () => {
    expect(selector(selectorState)).toEqual(dummyDimensions)
  })
})*/

 

