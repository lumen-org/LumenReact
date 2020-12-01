import { unmountComponentAtNode } from "react-dom";
import React from "react";
import { act } from "react-dom/test-utils";
import RnDPlotWrapper from "./RnDPlotWrapper";
import TestRenderer from "react-test-renderer";

jest.mock("../../components/Button/CloseButton", () => (props) =>
  <div>CloseButton</div>
);

let spy = null;
beforeEach(() => {
  spy = jest.spyOn(console, 'error').mockImplementation();
});

afterEach(() => {
  // cleanup on exiting
  spy.mockRestore();
});

describe("", () => {
  it("values", () => {

  })
})

describe("RnDPlotWrapper Funcitionality", () => {
  it("renders with or without a name", () => {
    let component = null;
    act(() => {
      let id = 0;
      let onActivePlotChange = jest.fn();
      let onPlotClose = jest.fn();
      let activePlotId = 1;
      let zIndex = 0;
      let plotType = "Standard";
      component = TestRenderer.create(
        <RnDPlotWrapper
          id={id}
          onActivePlotChange={onActivePlotChange}
          onPlotClose={onPlotClose}
          activePlotId={activePlotId}
          zIndex={zIndex}
          plotType={plotType}
        >
          {<ExampleChildren></ExampleChildren>}
        </RnDPlotWrapper>
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
})


class ExampleChildren extends React.Component {
  render() {
    return <div></div>;
  }
}
