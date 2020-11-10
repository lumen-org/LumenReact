import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { render, fireEvent, screen } from "@testing-library/react";

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
  
  act(() => {
    let handleClose = jest.fn();
    render(<CloseButton handleClose={handleClose} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);


});
