import React from 'react';
// React ライブラリをインポート。
// React コンポーネントを定義するために必要です。

import { useDispatch } from 'react-redux';
// Redux の `useDispatch` フックをインポート。
// `useDispatch` を使用することで、Redux のアクションを発行できる `dispatch` 関数を取得できます。

import { addItemToCart, removeItemFromCart } from '../redux/cartSlice';
// `cartSlice` から `addItemToCart` と `removeItemFromCart` アクションクリエーターをインポート。
// これらのアクションクリエーターは、カート内の商品の数量を増減させるためのアクションを生成します。

// `CartItem` コンポーネントを定義。
// このコンポーネントは、カート内の個々の商品を表示し、数量の増減ボタンを提供する役割を持ちます。
const CartItem = ({ id, title, quantity, price }) => {
  // `useDispatch` フックを使って `dispatch` 関数を取得。
  // この `dispatch` 関数を使って、カート内の商品の数量を増減させるアクションを発行します。
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
      {/* 商品情報を表示するセクション */}
      <div>
        {/* 商品タイトルを表示 */}
        <h3>{title}</h3>
        {/* 単価を表示（小数点以下 2 桁まで表示） */}
        <span>単価: ${price.toFixed(2)}</span>
        <div>
          {/* - ボタン: クリックすると `removeItemFromCart` アクションをディスパッチし、商品を 1 つ減らす */}
          <button
            onClick={() => dispatch(removeItemFromCart(id))}
            style={{ margin: '5px' }}
          >
            -
          </button>

          {/* 現在の商品の数量を表示 */}
          <span>数量: {quantity}</span>

          {/* + ボタン: クリックすると `addItemToCart` アクションをディスパッチし、商品を 1 つ追加 */}
          <button
            onClick={() => dispatch(addItemToCart({ id, title, price }))}
            style={{ margin: '5px' }}
          >
            +
          </button>
        </div>
      </div>

      {/* 合計金額を表示（数量 × 単価） */}
      <span>合計: ${(quantity * price).toFixed(2)}</span>
    </div>
  );
};

export default CartItem;
// `CartItem` コンポーネントをデフォルトエクスポートし、他のファイルからインポートして使用可能にする。
