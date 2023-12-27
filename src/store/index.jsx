import { createStore } from "redux";

const reducerFun = function (state = { counter: 0 }, action) {};

const store = createStore(reducerFun);
export default store;
