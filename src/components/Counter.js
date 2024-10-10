import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};

export default Counter;
