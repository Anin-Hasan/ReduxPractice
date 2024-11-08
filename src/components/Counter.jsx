// src/Counter.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counters/counterSlice";

function Counter({ id }) {
  const counter = useSelector((state) =>
    state.counters.find((c) => c.id === id)
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter.value}</h1>
      <button onClick={() => dispatch(increment(id))}>Increment</button>
      <button onClick={() => dispatch(decrement(id))}>Decrement</button>
    </div>
  );
}

export default Counter;
