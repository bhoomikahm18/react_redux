import { createStore } from "redux";

function reducerFun(state = { counter: 10 }, action) {
    return state;
}

const store = createStore(reducerFun);
export default store;
