import React from "react";
import { render } from "@testing-library/react";
import FieldItem from "./FieldItem";



test("render value", () => {
  const { getByText } = render(<FieldItem value={"sepal_width"}/>);
  expect(getByText("sepal_width")).toBeInTheDocument();
});