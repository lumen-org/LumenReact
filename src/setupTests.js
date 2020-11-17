import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

window.URL.createObjectURL = function() {};

//from https://github.com/facebook/prop-types/issues/28#issuecomment-521700117
/*jest.mock('prop-types/checkPropTypes', () => {
    return (...args) => {
      const checkPropTypes = jest.requireActual('prop-types/checkPropTypes');
      const originalConsoleError = console.error;
      console.error = function(...args) {
        process.nextTick(() => {
          throw new Error(...args);
        });
      };
      const result = checkPropTypes(...args);
      console.error = originalConsoleError;
      return result;
    };
  });*/