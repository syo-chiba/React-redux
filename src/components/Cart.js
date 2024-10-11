import React from 'react';
// React ライブラリをインポート。
// React コンポーネントを定義するために必要です。

import { useSelector, useDispatch } from 'react-redux';
// Redux の `useSelector` と `useDispatch` フックをインポート。
// `useSelector` は Redux ストアの状態を取得するために使用され、指定された状態を参照。
// `useDispatch` は Redux のアクションをディスパッチする（発行する）ために使用。

import { removeItemFromCart } from '../redux/cartSlice';
// `cartSlice` から `removeItemFromCart` アクションをインポート。
// カートから商品を削除するためのアクションクリエーターです。

// `Cart` コンポーネントを定義。
// このコンポーネントはカート内の商品一覧と合計金額を表示し、商品の削除ボタンを提供します。
const Cart = () => {
  // `useSelector` フックを使って、Redux ストアの `cart` スライスから `items` を取得。
  // `items` はカート内の商品の配列で、各商品は `{ id, title, quantity, price }` という形式を持つ。
  const items = useSelector((state) => state.cart.items);

  // `useSelector` フックを使って、`totalPrice` の値を取得。
  // `totalPrice` はカート内の全商品の合計金額を表す値。
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // `useDispatch` フックを使用して `dispatch` 関数を取得。
  // `dispatch` 関数を使って `removeItemFromCart` アクションを発行できるようにします。
  const dispatch = useDispatch();

  return (
    <div>
      {/* カートのタイトルを表示 */}
      <h2>Shopping Cart</h2>

      {/* `items` 配列の各商品をループして表示 */}
      {items.map((item) => (
        <div key={item.id} style={{ margin: '10px 0' }}>
          {/* 商品のタイトルと数量を表示 */}
          <span>{item.title}</span>
          <span> x {item.quantity}</span>

          {/* `Remove` ボタン: クリックすると `removeItemFromCart` アクションをディスパッチしてその商品を削除 */}
          <button
            onClick={() => dispatch(removeItemFromCart(item.id))}
            style={{ marginLeft: '10px' }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* 合計金額を表示 */}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      {/* `totalPrice.toFixed(2)` で小数点以下 2 桁にフォーマットして表示 */}
    </div>
  );
};

export default Cart;
// `Cart` コンポーネントをデフォルトエクスポートし、他のファイルでインポートして使用できるようにする。
