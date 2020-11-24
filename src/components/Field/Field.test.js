import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TitleH2 from "../Titles/TitleH2";
import FieldList from "../FieldList/FieldList";
//import { render, fireEvent, screen } from "@testing-library/react";
import { shallow } from "enzyme";
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
it("missing title", () => {
  act(() => {
    render(<Field />, container);
  });
  expect(container).toThrow();
  //expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
});

it("missing title 2", () => {
  act(() => {
    let handleClose = jest.fn();
    render(<Field handleClose={handleClose} />, container);
  });
  expect(container).toThrow();
});

*/
describe("Field.js Test", () => {
  it("render normally", () => {
    let title = "TestTitle";
    let data = ["Test", "Test", "Test"];
    jest.spyOn(console, "error");
    const wrapper = shallow(<Field title={title} data={data} />);
    expect(
      wrapper.contains(<TitleH2 value={title} />, <FieldList dataList={data} />)
    ).toEqual(true);
    
    expect(console.error).not.toBeCalled();
  });

  it("missing value title", () => {
    let title = "TestTitle";
    jest.spyOn(console, "error");
    const wrapper = shallow(<Field title={title} />);
    expect(console.error).toBeCalled();
  });

  it("missing value data", () => {
    let data = ["TestTitle"];
    jest.spyOn(console, "error");
    const wrapper = shallow(<Field data={data} />);
    expect(console.error).toBeCalled();
  });
});