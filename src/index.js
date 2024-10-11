import React from 'react';
// React ライブラリをインポート。Reactコンポーネントを定義するために必要。

import ReactDOM from 'react-dom';
// ReactDOM ライブラリをインポート。React コンポーネントをブラウザのDOMに描画するために必要。

import { Provider } from 'react-redux';
// react-redux の `Provider` コンポーネントをインポート。Redux のストアを React のコンポーネントツリー全体に渡すために使用。

import App from './App';
// `App` コンポーネントをインポート。全体のアプリケーションのルートコンポーネント。

import store from './redux/store';
// Redux の `store` をインポート。全アプリケーションで使用するグローバル状態管理を行うストア。

// React アプリをルートDOMに描画するための root オブジェクトを作成。
// これにより、React 18 以降の新しい `createRoot` API を使用して、より効率的な描画と更新が可能。
const root = ReactDOM.createRoot(document.getElementById('root'));

// `root.render` メソッドを用いて、`App` コンポーネントを `root` DOM に描画。
// `Provider` コンポーネントで `App` をラップすることにより、`store` を React コンポーネントツリー全体に渡し、
// アプリケーション内のどこからでも Redux の状態にアクセスできるようにする。
root.render(
  <Provider store={store}>
    {/* Redux ストアを使うことを可能にするため、`App` コンポーネントを `Provider` でラップ */}
    <App />
  </Provider>
);
