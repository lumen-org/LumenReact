import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./stores/appStore";
import MainWiondows from "./sections/MainWindows";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainWiondows />
      </Provider>
    );
  }
}

export default App;
