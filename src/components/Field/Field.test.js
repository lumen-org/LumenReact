import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { render, fireEvent, screen } from "@testing-library/react";

import Field from "./Field";
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
/*
it("wrong input", () => {
  act(() => {
    render(<Field />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
  
  act(() => {
    let handleClose = jest.fn();
    render(<Field handleClose={handleClose} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);


});

it("render normally", () => {
    act(() => {
      render(<Field />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
    
    act(() => {
      let title = "TestTitle";

      render(<Field title={title} />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
  });*/