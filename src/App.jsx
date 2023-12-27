import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function increment(){
    dispatch({type: 'INC'});
  }
  function decrement(){
    dispatch({type: "DEC"});
  }
  function reset(){
    dispatch({type: "RES"})
  }
  return (
    <div className="app">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button className="grey-pill" onClick={increment}>Increment</button>
      <button className="blue-pill" onClick={decrement}>Decrement</button>
      <button className="green-pill" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
