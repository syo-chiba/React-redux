// 1. アクションタイプを定義
// アクションタイプは状態変更を表す文字列定数として定義されます。
// 定数を使用することで、タイプミスを防ぎ、コードの保守性を向上させることができます。
export const INCREMENT = 'INCREMENT'; // カウントを増加させるアクションタイプ。
export const DECREMENT = 'DECREMENT'; // カウントを減少させるアクションタイプ。

// 2. アクションクリエーターを定義
// アクションクリエーターはアクションオブジェクトを返す関数です。
// アクションクリエーターを使用することで、アクションを簡単に生成し、Redux の `dispatch` 関数で呼び出すことができます。
export const increment = () => ({ type: INCREMENT });
// `increment` アクションを生成するアクションクリエーター。
// この関数は `{ type: 'INCREMENT' }` というアクションオブジェクトを返します。

export const decrement = () => ({ type: DECREMENT });
// `decrement` アクションを生成するアクションクリエーター。
// この関数は `{ type: 'DECREMENT' }` というアクションオブジェクトを返します。
