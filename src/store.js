import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

// for more information read here:
// https://redux.js.org/recipes/configuring-your-store
// if it gets larger please consider creating a configureStore() function
const composedEnhancers = typeof window === "object" &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true }) : compose;
const store = createStore(reducer,
  undefined,
  composedEnhancers(applyMiddleware(thunk))
);

export default store;
