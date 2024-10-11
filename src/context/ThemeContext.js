import React, { createContext, useState } from 'react';
// React コンポーネント、`createContext`、`useState` をインポート。
// `createContext` はコンテキスト（グローバルな状態管理）を作成するために使用され、
// `useState` は状態を管理するためのフックです。

// `ThemeContext` を作成し、エクスポート。
// `createContext` 関数を呼び出して新しいコンテキストを作成し、`ThemeContext` に代入。
// このコンテキストを使用することで、テーマ（light/dark）の状態と関数を他のコンポーネントに渡せるようにする。
export const ThemeContext = createContext();

// `ThemeProvider` コンポーネントを定義し、エクスポート。
// `ThemeProvider` は子コンポーネントにテーマに関連する値（`theme` と `toggleTheme`）を提供するコンポーネントラッパー。
export const ThemeProvider = ({ children }) => {
  // テーマの状態を管理する `theme` と、その状態を更新する `setTheme` を定義。
  // 初期状態は 'light' に設定されている。
  const [theme, setTheme] = useState('light');

  // テーマを切り替える `toggleTheme` 関数を定義。
  // `prevTheme` を参照して、現在のテーマが 'light' なら 'dark' に、'dark' なら 'light' に変更する。
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // `ThemeContext.Provider` でコンテキストを作成し、`value` プロパティを通じて提供する値を設定。
    // 子コンポーネント（`children`）に対して `theme` と `toggleTheme` を提供。
    // これにより、どのコンポーネントからでも `theme` の値を参照し、`toggleTheme` 関数を呼び出してテーマを変更できる。
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* 子コンポーネントを表示。これにより、`ThemeProvider` でラップされた全てのコンポーネントが `theme` と `toggleTheme` にアクセス可能。 */}
      {children}
    </ThemeContext.Provider>
  );
};
