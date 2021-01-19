import * as actions from "./actions";
import * as types from "./constants";
import reducer from "./reducer";
// import * as selector from './selector';
import {
  dimStore,
  dimStore2,
  dimStore3,
  emp_mpgDimensions,
  emptyDimStore,
  irisDimensions,
  modelId1,
  modelId2,
  modelId3,
  modelName1,
  modelName2,
  modelName3
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
    };
    expect(actions._deleteDimensions(modelId)).toEqual(expectedAction);
    }
  )
  });
  
describe('dimensions reducer', () => {

    it('should return the initial state', () => {
      const action ={};
      expect(reducer(undefined, action)).toEqual(
        emptyDimStore
      )
    })
  
    it('should handle ADD_ALL_DIMENSIONS', () => {
      /// first: empty store, first dimensions
      const action = {
        type: types.ADD_ALL_DIMENSIONS,
        payload: {
          modelId: modelId1,
          modelName: modelName1,
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
        modelName: modelName2,
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
        modelName: modelName3,
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

 

