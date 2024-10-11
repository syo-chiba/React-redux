// 2.Reduxによる高度な状態管理
// import { createStore } from 'redux';
// import counterReducer from './reducer';

// // ストアを作成
// const store = createStore(counterReducer);

// export default store;

// 3.Reduxをよりシンプルに使用できるRedux Toolkitとは
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';

// 2.Reduxによる高度な状態管理
// 統合した為追加
import counterReducer from './reducer';

// ストアの作成
const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    counter: counterReducer
  },
});

export default store;