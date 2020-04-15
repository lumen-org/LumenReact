/*import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Example from "./Facet";

class ExampleContainer extends React.Component {
  static propTypes = {
    exampleprop: PropTypes.string.isRequired
  };

  state = {
    dataArray1:[],
    dataArray2:[]
  };

  getData = () => {
    fetchData().then(
      response =>({
        this.setState({
          dataArray1: response["dataArray1"],
          dataArray2: response["dataArray2"]
        })
      })
    )
  };

  // componentDidMount is a function that beglongs to the react life cycle, all the data fetching from the Internet goes here.
  componentDidMount() {
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
      >) }
}
        // here we can get the state from global store directly to props.
const mapStateToProps = state => ({
        propFromStore: state.store1.storedProp1
      });

        // here we can use the state from the class directly.

        const mapDispatchToProps = dispatch => {
        return {
        propInStore: dataArray1 => dispatch(saveDataArray1(dataArray1))
      };
      }

        // connect() function is a higher oder component wrapper.

        export default connect(mapStateToProps,mapDispatchToProps)(ExampleContainer);*/