# React Style Guide for Lumen

Author: KE LI
Date: April 8, 2020

## How to Structure a Class Component

- If the component we write has a state or a prop, then the component should be written as a class component.
- Normally, a class component has props and states.

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

class Example extends React.Component {
  static propTypes = {
    exampleprop1: PropTypes.string.isRequired,
    exampleprop2: PropTypes.array,
  };

  state = {
    openModal: False
      };

  // add a function in the component, this function is responsible for
  // changing the state of the component, for example.
  onButtonClick = () => {
    const { openModal } = this.props;
    this.setState({
      openModal: True,
    });
  };

 render(){
     const {openModal} = this.state;

     return (
         <div>
         <Modal isOpen= {openModal}>
         <button onclick = {this.onButtonClick}/>
         </div>
     )
 }

}
```

The props of the class are static data that won't change during the component's lifecycle, such as title and current user information. We use PropType to check the data type, this could help us prevent bugs when the the project and the components get large.

## How to Structure a Class Component Container

- A component needs a container if it needs to fetch data, or connect data to a redux store.
- The container is located in the same folder as the component.
- An index.js file is often added to export the component container.

```javascript

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Example from "./Example";

class ExampleContainer extends React.Component {
    static propTypes = {
        exampleprop: PropTypes.string.isRequired
    }

    state = {
        dataArray1:[],
        dataArray2:[]
    }

    getData = () => {
        fetchData().then(
            response =>({
                this.setState({
                    dataArray1: response["dataArray1"],
                    dataArray2: response["dataArray2"]
                })
            })
        )
    }

    // componentDidMount is a function that beglongs to the react life cycle, all the data fetching from the Internet goes here.
    componentDidtMount() {
        this.getData();
    }

    // componentDidUpdate refresh the component, if the props or state changes. This function could be used, for example, when something in the global state is changed, and the children components need to update accordingly as well.

    componentDidUpdate(prevProps, preState) {
        if (prevProps.exampleprop !== this.props.exampleprop){
            this.getData()
        }
    }

    render() {
        const {dataArray1, dataArray2} = this.state;
        return (
            <Example
             dataArray1= {dataArray1}
             daraArray2= {dataArray2}
            >
        )
    }

}

```
