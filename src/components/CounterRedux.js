import React from 'react';
// React ライブラリをインポート。
// React コンポーネントを定義するために必要です。

import { useSelector, useDispatch } from 'react-redux';
// Redux のフックをインポート。
// `useSelector`: Redux ストアから特定の状態を取得するためのフック。
// `useDispatch`: Redux の `dispatch` 関数を取得し、アクションを発行するためのフック。

import { increment, decrement } from '../redux/actions';
// アクションクリエーター `increment` と `decrement` をインポート。
// これらのアクションクリエーターは、それぞれカウントを増減させるアクションを生成します。

const CounterRedux = () => {
  // グローバル状態の `counter` スライスから `count` の値を取得。
  // `state.counter.count` は `counter` スライスの中にある `count` プロパティを参照。
  const count = useSelector((state) => state.counter.count);

  // `dispatch` 関数を取得し、アクションを発行する準備をする。
  // この `dispatch` を使って、`increment` や `decrement` アクションをストアに送信（ディスパッチ）し、状態を変更できるようにする。
  const dispatch = useDispatch();

  return (
    <div>
      {/* 現在のカウント値を表示 */}
      <h1>Count: {count}</h1>

      {/* + ボタン: `increment` アクションをディスパッチして、カウントを 1 増加させる */}
      <button onClick={() => dispatch(increment())}>+</button>

      {/* - ボタン: `decrement` アクションをディスパッチして、カウントを 1 減少させる */}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default CounterRedux;
// `CounterRedux` コンポーネントをデフォルトエクスポートし、他のコンポーネントでインポートできるようにする。
