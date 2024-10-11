// 2. Reduxによる高度な状態管理
// Reduxの標準的な方法である `createStore` を使ってストアを作成する方法がコメントアウトされています。
// 現在では、Redux Toolkitの`configureStore`を使うことで、より簡潔にストアを作成できます。

// import { createStore } from 'redux';
// import counterReducer from './reducer';
// // ストアを作成
// const store = createStore(counterReducer);
// export default store;

// 3. Reduxをよりシンプルに使用できるRedux Toolkitとは
import { configureStore } from '@reduxjs/toolkit'; 
// `configureStore` は `@reduxjs/toolkit` に含まれる関数で、Redux ストアを簡単に設定できるようにするユーティリティです。
// 追加のミドルウェアやデベロッパーツールとの連携が自動で行われ、よりシンプルかつ安全にストアを構築できます。

import cartReducer from './cartSlice'; 
// カートの状態を管理する `cartSlice` をインポート。商品の追加、削除、数量の更新などのロジックが含まれています。

import productsReducer from './productsSlice'; 
// 商品の状態を管理する `productsSlice` をインポート。商品リストの取得や在庫管理に関するロジックが含まれています。

// 2. Reduxによる高度な状態管理
// 統合した為追加
import counterReducer from './reducer'; 
// シンプルなカウンターの状態を管理する `reducer` をインポート。カウントの増加・減少のロジックが含まれています。

// ストアの作成
// Redux Toolkit の `configureStore` を使ってストアを作成。
// ストアには、`cart`, `products`, `counter` という3つの状態管理用の reducer を統合しています。
// これにより、各機能（カート、商品、カウンター）を個別に管理しつつ、一つのストアとして扱うことができます。
const store = configureStore({
  reducer: {
    cart: cartReducer,       // カート機能用の状態管理
    products: productsReducer, // 商品一覧用の状態管理
    counter: counterReducer   // カウンター機能用の状態管理
  },
});

// 作成したストアをデフォルトエクスポート
export default store;
