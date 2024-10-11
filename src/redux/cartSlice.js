import { createSlice } from '@reduxjs/toolkit';
// `createSlice` を `@reduxjs/toolkit` からインポート。
// `createSlice` はアクションタイプ、アクションクリエーター、リデューサーをまとめて定義することを可能にする便利な機能です。

// カートの初期状態を定義。
// `items` はカート内の商品を格納する配列。
// `totalQuantity` はカート内の全商品の数量を管理。
// `totalPrice` はカート内の全商品の合計金額を管理。
const initialState = {
  items: [],          // カートに追加された商品の配列
  totalQuantity: 0,   // カート内の商品の総数量
  totalPrice: 0,      // カート内の商品合計金額
};

// `cartSlice` の定義。
// スライス名、初期状態、リデューサーを設定し、カートの状態管理を行います。
const cartSlice = createSlice({
  name: 'cart',          // スライス名を定義。この名前はアクションタイプの接頭辞として使用される。
  initialState,          // 初期状態を設定。
  reducers: {            // 同期的な状態変更のロジックを `reducers` オブジェクト内で定義。
    addItemToCart: (state, action) => {
      // カートに新しい商品を追加するアクション。`state` と `action` を受け取る。
      const newItem = action.payload;   // `action.payload` から新しい商品データを取得。
      const existingItem = state.items.find((item) => item.id === newItem.id); 
      // すでにカートに同じ `id` を持つ商品があるか確認。

      if (!existingItem) {
        // カートに存在しない新しい商品を追加する場合。
        state.items.push({ ...newItem, quantity: 1 });
        // 商品データをカートに追加し、`quantity` プロパティを `1` に設定。
        state.totalQuantity += 1; // カート内の総商品の数量を1増やす。
        state.totalPrice += newItem.price; // 合計金額に新しい商品の価格を加算。
      } else {
        // 既存の商品がカートにある場合、その商品の数量を増やす。
        existingItem.quantity += 1; // 既存商品の数量を1増やす。
        state.totalQuantity += 1; // カート内の総商品の数量を1増やす。
        state.totalPrice += newItem.price; // 合計金額に既存商品の価格を加算。
      }
    },
    removeItemFromCart: (state, action) => {
      // カートから商品を削除するアクション。`state` と `action` を受け取る。
      const id = action.payload; // `action.payload` から削除対象商品の `id` を取得。
      const existingItem = state.items.find((item) => item.id === id); 
      // `id` が一致する商品を `state.items` から検索。

      if (existingItem.quantity === 1) {
        // 商品の数量が `1` の場合、その商品をカートから削除。
        state.items = state.items.filter((item) => item.id !== id);
        // `state.items` をフィルタリングし、指定された `id` の商品を除外。
        state.totalQuantity -= 1; // カート内の総商品の数量を1減らす。
        state.totalPrice -= existingItem.price; // 合計金額からその商品の価格を減算。
      } else {
        // 商品の数量が `1` より多い場合、数量を1減らすだけにする。
        existingItem.quantity -= 1; // 既存商品の数量を1減らす。
        state.totalQuantity -= 1; // カート内の総商品の数量を1減らす。
        state.totalPrice -= existingItem.price; // 合計金額からその商品の価格を減算。
      }
    },
  },
});

// `addItemToCart` と `removeItemFromCart` をアクションクリエーターとしてエクスポート。
// `cartSlice` の `reducers` プロパティ内で定義された各関数は、対応するアクションを生成する関数が自動的に作成される。
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

// `cartSlice.reducer` をデフォルトエクスポート。
// このリデューサーは、Redux のストアに渡され、アクションに応じて `cart` の状態を変更する役割を担う。
export default cartSlice.reducer;
