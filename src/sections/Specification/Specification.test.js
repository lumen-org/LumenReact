import React from "react";
import ReactDOM from "react-dom";
import Specification from "./Specification";
import TestRenderer, { act } from "react-test-renderer";

// https://jestjs.io/docs/en/tutorial-react
/// what to mock ? Field, TitelH1, TitelH2, , Facet

jest.mock("../../components/Field", () => (props) => (<div>
    <div>
        {props.title}
    </div>
    <div>
        {props.data}
    </div>
</div>));

jest.mock("../../components/Titles/TitleH1", () => (props) => (
    <div>
        {props.value}
    </div>
));

jest.mock("../../components/Titles/TitleH2", () => (props) => (
    <h2>
        {props.value}
    </h2>
));

jest.mock("../Facet", () => (props) => (
    <div>
        {props.facets}
    </div>
))

test("Schema displays dimensions correctly", () => {
    const specifications = { "X_Axis": [], "Y-Axis": []};
    const facets = "bla";//{ "Prediction": {}, "Data Points": {}, "Marginals": {}, "Desity": {} };

    const component = TestRenderer.create(
        <Specification specifications={specifications} facets={facets} />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test("Specification throws no exception when all attributes are passed correctly", () => {
    const specifications = { "X_Axis": [], "Y-Axis": []};
    const facets = "bla";//{ "Prediction": {}, "Data Points": {}, "Marginals": {}, "Desity": {} };

    jest.spyOn(console, "error")

    TestRenderer.create(
        <Specification specifications={specifications} facets={facets} />
    )
    expect(console.error).not.toBeCalled()
})

/*

test("Specification throws exception when no attribute is passed", () => {

    jest.spyOn(console, "error");
    act(() => {
        TestRenderer.create(
            <Specification />
        );
    });
    expect(console.error).toBeCalled();
})


test("Schema throws exception when no quantitative attribute is passed", () => {
    const categorical = ["sepal_length", "sepal_width", "petal_length", "petal_width"]

    jest.spyOn(console, "error")

    TestRenderer.create(
        <Specification categorical={categorical} />
    )
    expect(console.error).toBeCalled()
})

test("Schema throws exception when no categorical attribute is passed", () => {
    const quantitative = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "species"]

    jest.spyOn(console, "error")
    TestRenderer.create(
        <Specification quantitative={quantitative} />
    )

    expect(console.error).toBeCalled()
})




// My proposel evtl.
// beforeEach(() => {
// jest.spyOn(console, 'error')
// jest.spyOn(console, 'warn')
// })
// afterEach(() => {
// /* eslint-disable no-console,jest/no-standalone-expect */
// expect(console.error).not.toBeCalled()
// expect(console.warn).not.toBeCalled()
// })
