import React, { createContext, useReducer } from 'react';
// React ライブラリから `createContext` と `useReducer` をインポート。
// `createContext` はグローバルに状態を共有するためのコンテキストを作成するために使用。
// `useReducer` は複雑な状態管理を簡素化するためのフック。

// カウンターの初期状態を定義。
// `count` プロパティを持ち、初期値は `0`。
const initialState = { count: 0 };

// カウンター用のリデューサー関数を定義。
// `state` と `action` を引数に取り、アクションのタイプに基づいて新しい状態を返す。
const counter = (state, action) => {
  switch (action.type) {
    case 'increment':
      // `increment` アクションの場合、現在の `count` を 1 増加させる。
      return { count: state.count + 1 };
    case 'decrement':
      // `decrement` アクションの場合、現在の `count` を 1 減少させる。
      return { count: state.count - 1 };
    default:
      // 上記以外のアクションの場合、現在の状態をそのまま返す。
      return state;
  }
};

// カウンター用のコンテキストを作成。
// このコンテキストを使って、子コンポーネントにカウンターの状態と操作を渡せるようにする。
export const CounterContext = createContext();

// `CounterProvider` コンポーネントを定義し、エクスポート。
// `CounterProvider` は、カウンターの状態と操作（dispatch）を提供するコンポーネントラッパー。
export const CounterProvider = ({ children }) => {
  // `useReducer` フックを使って状態と dispatch 関数を取得。
  // `counter` はリデューサー関数、`initialState` は初期状態。
  const [state, dispatch] = useReducer(counter, initialState);

  return (
    // `CounterContext.Provider` で、状態 (`state`) と操作 (`dispatch`) を子コンポーネントに渡す。
    // `value` プロパティに `{ state, dispatch }` を設定し、これによりカウンターの状態管理を他のコンポーネントからも操作できる。
    <CounterContext.Provider value={{ state, dispatch }}>
      {/* 子コンポーネントを描画。これにより、`CounterProvider` でラップされた全てのコンポーネントがカウンターの状態 (`state`) と `dispatch` にアクセス可能。 */}
      {children}
    </CounterContext.Provider>
  );
};
