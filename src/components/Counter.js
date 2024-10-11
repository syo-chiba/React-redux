import React, { useContext } from 'react';
// React の `useContext` フックをインポート。
// `useContext` は、React コンテキストから値を取得するために使用されるフックです。

import { CounterContext } from '../context/CounterContext';
// `CounterContext` をインポート。
// `CounterContext` は、グローバルなカウンターの状態 (`state`) と操作用の関数 (`dispatch`) を提供するコンテキストです。

const Counter = () => {
  // `useContext` を使用して `CounterContext` から `state` と `dispatch` を取得。
  // `state` は現在のカウンターの状態 (`{ count: number }`) を表し、`dispatch` は状態を更新するための関数。
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      {/* 現在のカウント値を表示 */}
      <h1>Count: {state.count}</h1>

      {/* + ボタン: `dispatch` 関数を使って `increment` アクションを発行し、カウントを 1 増やす */}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>

      {/* - ボタン: `dispatch` 関数を使って `decrement` アクションを発行し、カウントを 1 減らす */}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};

export default Counter;
// `Counter` コンポーネントをデフォルトエクスポートし、他のファイルからインポートして使用可能にする。
