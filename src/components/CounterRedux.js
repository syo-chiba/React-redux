import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const CounterRedux = () => {
  // グローバル状態を取得
  const count = useSelector((state) => state.count);

  // アクションを発行するためのディスパッチ関数
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default CounterRedux;
