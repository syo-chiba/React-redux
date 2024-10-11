import React, { useContext } from 'react';
// React ライブラリから `useContext` フックをインポート。
// `useContext` は、React コンテキストから値を取得するためのフックで、コンテキストにアクセスし、その値を使うことができます。

import { ThemeContext } from '../context/ThemeContext';
// `ThemeContext` をインポート。
// `ThemeContext` は、テーマの状態 (`theme`) とテーマの切り替え関数 (`toggleTheme`) を管理するコンテキストです。

const ThemeButton = () => {
  // `useContext` を使って `ThemeContext` から `theme` と `toggleTheme` を取得。
  // `ThemeContext` から取得した `theme` は現在のテーマ（'light' または 'dark'）を表し、
  // `toggleTheme` はテーマを切り替えるための関数。
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // ボタンのスタイルは現在の `theme` によって変更される。
    // `theme` が 'light' の場合、背景は白 (`#fff`) 、文字色は黒 (`#000`)。
    // `theme` が 'dark' の場合、背景は黒 (`#333`) 、文字色は白 (`#fff`)。
    <button
      style={{
        background: theme === 'light' ? '#fff' : '#333', // テーマに応じた背景色を設定
        color: theme === 'light' ? '#000' : '#fff', // テーマに応じた文字色を設定
      }}
      // ボタンをクリックすると `toggleTheme` 関数が呼び出され、テーマを切り替える。
      onClick={toggleTheme}
    >
      Toggle Theme {/* ボタンの表示テキスト */}
    </button>
  );
};

export default ThemeButton;
// `ThemeButton` コンポーネントをデフォルトエクスポート。
// このコンポーネントは、`ThemeProvider` でラップされたコンポーネント内で使用することを前提にしています。
