import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import TestRenderer from "react-test-renderer"
import CloseButton from "./CloseButton";

let container = null;
let spy = null;
beforeEach(() => {
  spy = jest.spyOn(console, 'error').mockImplementation();
});

afterEach(() => {
  // cleanup on exiting
  spy.mockRestore();
});

describe("CloseButton Missing Values", () => {
  test("CloseButton missing value", () => {
    act(() => {
      TestRenderer.create(<CloseButton />);
    });
    expect(console.error).toBeCalled()
  }); 
});

describe("CloseButton Functionality", () => {
  test("CloseButton render normally", () => {  
    
    let handleClose = jest.fn();
    let component = TestRenderer.create(<CloseButton handleClose={handleClose} />, container);
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

