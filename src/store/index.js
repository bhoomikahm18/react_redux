import { createStore } from "redux";

function reducerFun(state = { counter: 0 }, action) {
  //They should be synchronous function
  //We should not mutate the original state

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  if(action.type == "RES"){
    return {counter: 0};
  }
  return state;
}

const store = createStore(reducerFun);
export default store;
