import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// `createSlice` は Redux Toolkit の機能で、アクションとリデューサーを簡単に定義できるユーティリティです。
// `createAsyncThunk` は Redux Toolkit の非同期アクションを定義するための関数です。
// 非同期処理を行う際に、アクションの状態（リクエストの送信中、成功、失敗）を追跡することができます。

// 非同期処理を定義
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', // アクションタイプの名前。ここでは `products/fetchProducts` を指定。
  async () => {
    // `createAsyncThunk` の第2引数は非同期処理を定義する関数。
    // `async` 関数を使ってAPIリクエストを行い、データを取得します。
    const response = await fetch('https://fakestoreapi.com/products');
    // APIからのレスポンスデータを JSON 形式で返します。
    return response.json();
  }
);

// `productsSlice` の定義
// Redux Toolkit の `createSlice` を使ってスライスを定義。
// スライスは、特定の状態管理とそのロジックをカプセル化するための単位です。
const productsSlice = createSlice({
  name: 'products', // スライスの名前。アクションタイプの接頭辞として使用されます。
  initialState: {
    items: [],      // 商品データを格納する配列。
    status: 'idle', // 非同期処理の状態。初期値は 'idle' （何も行われていない状態）。
    error: null,    // エラーメッセージを格納するプロパティ。
  },
  reducers: {}, // 同期アクション（状態を変更する通常のアクション）を定義する場所。今回は使用しないため空オブジェクト。
  extraReducers: (builder) => {
    // `extraReducers` は、非同期アクション（createAsyncThunk で作成したアクション）の処理を定義するためのプロパティ。
    builder
      .addCase(fetchProducts.pending, (state) => {
        // `fetchProducts` がリクエストを送信している間（`pending` 状態）に実行されるケース。
        state.status = 'loading'; // `status` を 'loading' に更新。
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // `fetchProducts` が正常に完了した場合（`fulfilled` 状態）に実行されるケース。
        state.status = 'succeeded'; // `status` を 'succeeded' に更新。
        state.items = action.payload; // 取得したデータ（`action.payload`）を `items` に格納。
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // `fetchProducts` が失敗した場合（`rejected` 状態）に実行されるケース。
        state.status = 'failed'; // `status` を 'failed' に更新。
        state.error = action.error.message; // エラーメッセージを `error` に格納。
      });
  },
});

export default productsSlice.reducer;
// スライスの `reducer` をエクスポート。
// この `reducer` は Redux のストアに渡され、アクションに応じて `products` の状態を変更します。
