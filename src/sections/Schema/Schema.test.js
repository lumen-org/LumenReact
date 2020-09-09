import React from "react"
import ReactDOM from "react-dom"
import Schema from "./Schema"
import renderer from "react-test-renderer"

// https://jestjs.io/docs/en/tutorial-react

jest.mock("../../components/Field", () => (props) => (<div>
    <div>
        {props.title}
    </div>
    <div>
        {props.data}
    </div>
</div>))

test("Schema displays dimensions correctly", () => {
    const quantitative = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "species"]
    const categorical = ["sepal_length", "sepal_width", "petal_length", "petal_width"]

    const component = renderer.create(
        <Schema quantitative={quantitative} categorical={categorical} />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test("Schema throws no exception when all attributes are passed correctly", () => {
    const quantitative = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "species"]
    const categorical = ["sepal_length", "sepal_width", "petal_length", "petal_width"]

    jest.spyOn(console, "error")

    const div = document.createElement("div");
    ReactDOM.render(<Schema quantitative={quantitative} categorical={categorical} />, div);

    expect(console.error).not.toBeCalled()
})

test("Schema throws exception when no quantitative attribute is passed", () => {
    const categorical = ["sepal_length", "sepal_width", "petal_length", "petal_width"]

    jest.spyOn(console, "error")

    const div = document.createElement("div");
    ReactDOM.render(<Schema categorical={categorical} />, div);

    expect(console.error).toBeCalled()
})

test("Schema throws exception when no categorical attribute is passed", () => {
    const quantitative = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "species"]

    jest.spyOn(console, "error")

    const div = document.createElement("div");
    ReactDOM.render(<Schema quantitative={quantitative} />, div);

    expect(console.error).toBeCalled()
})

test("Schema throws exception when no attribute is passed", () => {
    const quantitative = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "species"]

    jest.spyOn(console, "error")

    const div = document.createElement("div");
    ReactDOM.render(<Schema />, div);

    expect(console.error).toBeCalled()
})



// My proposel evtl.
// beforeEach(() => {
//     jest.spyOn(console, 'error')
//     jest.spyOn(console, 'warn')
//   })
  
//   afterEach(() => {
//     /* eslint-disable no-console,jest/no-standalone-expect */
//     expect(console.error).not.toBeCalled()
//     expect(console.warn).not.toBeCalled()
//   })