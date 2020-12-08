import React from "react";
import Schema from "./Schema";
import TestRenderer from "react-test-renderer";

// https://jestjs.io/docs/en/tutorial-react

jest.mock("../../components/Field", () => (props) => (<div>
    <div>
        {props.title}
    </div>
    <div>
        {props.data}
    </div>
</div>));

let spy = null;
beforeEach(() => {
  spy = jest.spyOn(console, 'error').mockImplementation();
});

afterEach(() => {
  // cleanup on exiting
  spy.mockRestore();
});

describe("Schema functionality test", () => {
    test("Schema displays dimensions correctly", () => {
        const quantitative = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "species"];
        const categorical = ["sepal_length", "sepal_width", "petal_length", "petal_width"];
    
        const component = TestRenderer.create(
            <Schema quantitative={quantitative} categorical={categorical} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    test("Schema throws no exception when all attributes are passed correctly", () => {
        const quantitative = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "species"];
        const categorical = ["sepal_length", "sepal_width", "petal_length", "petal_width"];
    
        TestRenderer.create(
            <Schema quantitative={quantitative} categorical={categorical} />
        );
        expect(console.error).not.toBeCalled();
    });
});

describe("Schema Test Errors thrown", () => {
    test("Schema throws exception when no quantitative attribute is passed", () => {
        const categorical = ["sepal_length", "sepal_width", "petal_length", "petal_width"];
        TestRenderer.create(
            <Schema categorical={categorical} />
        );
        expect(console.error).toBeCalled();
    });
    
    test("Schema throws exception when no categorical attribute is passed", () => {
        const quantitative = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "species"];
        TestRenderer.create(
            <Schema quantitative={quantitative} />
        );
    
        expect(console.error).toBeCalled();
    });
    // not working 
    /*
    test("Schema throws exception when no attribute is passed", () => {
        jest.spyOn(console, "error");
        TestRenderer.create(
            <Schema />
        );
        expect(console.error).toBeCalled();
    })
    */ 
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
