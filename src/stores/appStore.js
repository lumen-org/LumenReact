import { createStore } from "redux";
import appReducer from "../states/reducer";

const store = createStore(appReducer);

export default store;
