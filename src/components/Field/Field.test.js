import React from "react";
import { unmountComponentAtNode } from "react-dom";
import TestRenderer from "react-test-renderer";
import Field from "./Field";

/// mock children components for shallow rendering
jest.mock("../../components/Titles/TitleH2", () => (props) => (
  <h2>{props.value}</h2>
));

jest.mock("../../components/FieldList/FieldList", () => (props) => (
<div>FieldList</div>
));

/// executed before every describe
let container = null;
let spy = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  spy = jest.spyOn(console, 'error').mockImplementation(); /// prevents console from showing the errors while simultaniously being able to catch errors
});

/// executed after every describe
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  console.clear();
  spy.mockRestore(); // important so errors are displayed again
});

/// Test missing Values
describe("Field.js Missing Values Test", () => {

  it("missing value data", () => {
    let title = "TestTitle";
    TestRenderer.create(<Field title={title} />);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it("missing value title", () => {
    let data = ["TestTitle"];
    TestRenderer.create(<Field data={data} />);
    expect(console.error).toHaveBeenCalledTimes(1);
  }); 
});

/// test normal rendering and additional functionality
describe("Field.js Functionality Test", () => {
  it("render normally", () => {
    let title = "TestTitle";
    let data = ["Test", "Test", "Test"];
    const component = TestRenderer.create(<Field title={title} data={data} />);
    let tree = component.toJSON();
    expect(console.error).not.toBeCalled();
    expect(tree).toMatchSnapshot();
  });
});