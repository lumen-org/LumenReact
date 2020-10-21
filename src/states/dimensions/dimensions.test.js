import * as actions from './actions';
import * as types from './constants'

describe('actions', () => {
    it('should create an action to add the given dimensions', () => {
        let dimensions = [
            {
                "name": "userId",
                "dtype": "string",
            },
            {
                "fegrt": "dkei",
                "name": "hidden",
            }

        ]; 
        const modelId = "9b322875-ed80-4a09-aec7-8d417fe50c1e";
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
  })