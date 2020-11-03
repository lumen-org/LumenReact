import * as actions from './actions';
import * as types from './constants';
import reducer from './reducer';
import selector from './selector';
import { dimStore, modelId1, modelId2, dummyDimensions, dimStore2, selectorState } from './testData';

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
      expect(actions.addAllDimensions(modelId, modelName, dimensions)).toEqual(expectedAction)
    })
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
  })

describe('dimensions reducer', () => {
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
})

/*describe("dimensions selector unit test ", () => {
  it('should return the dummy dimensions', () => {
    expect(selector(selectorState)).toEqual(dummyDimensions)
  })
})*/

 

