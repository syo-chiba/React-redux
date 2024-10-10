// 1. アクションタイプを定義
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// 2. アクションクリエーターを定義
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
