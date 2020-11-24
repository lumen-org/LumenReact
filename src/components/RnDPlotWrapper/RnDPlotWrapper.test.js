import { unmountComponentAtNode } from "react-dom";
import React from "react";
import { act } from "react-dom/test-utils";
import { render, fireEvent, screen } from "@testing-library/react";
import RnDPlotWrapper from "./RnDPlotWrapper";
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

it("renders with or without a name", () => {
  act(() => {
    let id = 0;
    let onActivePlotChange = jest.fn();
    let onPlotClose = jest.fn();
    let activePlotId = 1;
    let zIndex = 0;
    let plotType = "Standard";
    render(
      <RnDPlotWrapper
        id={id}
        onActivePlotChange={onActivePlotChange}
        onPlotClose={onPlotClose}
        activePlotId={activePlotId}
        zIndex={zIndex}
        plotType={plotType}
      >
        {<ExampleChildren></ExampleChildren>}
      </RnDPlotWrapper>,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
});

class ExampleChildren extends React.Component {
  render() {
    return <div></div>;
  }
}