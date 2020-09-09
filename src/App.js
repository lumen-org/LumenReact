import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import MainWindows from "./sections/MainWindows";
import "./App.scss";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainWindows className="app" />
      </Provider>
    );
  }
}

export default App;
