import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import FieldItem from "./FieldItem";

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
test("render value", () => {
  const { getByText } = render(<FieldItem value={"sepal_width"}/>);
  expect(getByText("sepal_width")).toBeInTheDocument();
});
*/