import { createStore } from "redux";
import rootReducer from "./states/appReducer";

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    serialize: true
  }));

export default store;
