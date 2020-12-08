import React from "react";
import { render } from "@testing-library/react";
import FieldItem from "./FieldItem";
import TestRenderer from "react-test-renderer";

jest.mock("../../components/Button/CloseButton", () => (props) => 
<div>CloseButton</div>
)
/// executed before every describe
let spy = null;
beforeEach(() => {
  // setup a DOM element as a render target
  spy = jest.spyOn(console, 'error').mockImplementation(); /// prevents console from showing the errors while simultaniously being able to catch errors
});

/// executed after every describe
afterEach(() => {
  // cleanup on exiting
  spy.mockRestore(); // important so errors are displayed again
});

/// Test missing Values
describe("Field.js Missing Values Test", () => {

  it("false propType value", () => {
    let value = 8;
    let handleFieldItemClose = jest.fn();
    let handleModalOpen = jest.fn();
    TestRenderer.create(<FieldItem value={value} handleFieldItemClose={handleFieldItemClose} handleModalOpen={handleModalOpen} />);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it("missing value value", () => {
    let handleFieldItemClose = jest.fn();
    let handleModalOpen = jest.fn();
    TestRenderer.create(<FieldItem handleFieldItemClose={handleFieldItemClose} handleModalOpen={handleModalOpen} />);
    expect(console.error).toHaveBeenCalledTimes(1);
  }); 

  it("missing value handleFieldItemClose", () => {
    let value = "sepal_width";
    let handleModalOpen = jest.fn();
    TestRenderer.create(<FieldItem value={value} handleModalOpen={handleModalOpen} />);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it("missing value handleModalOpen", () => {
    let value = "sepal_width";
    let handleFieldItemClose = jest.fn();
    TestRenderer.create(<FieldItem value={value} handleFieldItemClose={handleFieldItemClose} />);
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});

/// test normal rendering and additional functionality
describe("Field.js Functionality Test", () => {
  it("render normally", () => {
    let value = "sepal_width";
    let handleFieldItemClose = jest.fn();
    let handleModalOpen = jest.fn();
    const component = TestRenderer.create(<FieldItem value={value} handleFieldItemClose={handleFieldItemClose} handleModalOpen={handleModalOpen} />);
    let tree = component.toJSON();
    expect(console.error).not.toBeCalled();
    expect(tree).toMatchSnapshot();
  });

  it("render value", () => {
    const { getByText } = render(<FieldItem value={"sepal_width"}/>);
    expect(getByText("sepal_width")).toBeInTheDocument();
  });
});

