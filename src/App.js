import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./stores/appStore";
import MainWindows from "./sections/MainWindows";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainWindows />
      </Provider>
    );
  }
}

export default App;
