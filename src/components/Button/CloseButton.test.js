import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import TestRenderer from "react-test-renderer"

import CloseButton from "./CloseButton";
import pretty from "pretty";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render normally", () => {
  act(() => {
    render(<CloseButton />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
  
  
  let handleClose = jest.fn();
  let component = TestRenderer.create(<CloseButton handleClose={handleClose} />, container);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();


});