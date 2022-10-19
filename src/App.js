import React, { useSelector, useDispatch } from "react";
import { decrement, increment } from "./redux/counter";
import "./styles.css";
import { decrement, increment, incrementByAmount } from "./redux/store";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
    </div>
  );
}
