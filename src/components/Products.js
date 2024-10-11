import React, { useEffect } from 'react';
// React の `useEffect` フックをインポート。
// `useEffect` は、コンポーネントのマウント時または特定の状態が変化したときに副作用を実行するために使用。

import { useSelector, useDispatch } from 'react-redux';
// Redux の `useSelector` と `useDispatch` フックをインポート。
// `useSelector` は Redux ストアの状態にアクセスするために使用され、指定した状態を参照。
// `useDispatch` は Redux のアクションをディスパッチする（発行する）ために使用。

import { fetchProducts } from '../redux/productsSlice';
// `productsSlice` から `fetchProducts` アクションをインポート。
// 商品データを API から非同期で取得するためのアクション。

import { addItemToCart } from '../redux/cartSlice';
// `cartSlice` から `addItemToCart` アクションをインポート。
// カートに商品を追加するアクション。

const Products = () => {
  const dispatch = useDispatch(); // `dispatch` 関数を取得し、アクションを発行できるようにする。

  // `useSelector` を使って Redux ストアの `products` スライスの `items` と `status` の状態を取得。
  // `state.products.items` は現在の商品のリストを表し、`status` はデータ取得の状態を示す。
  const products = useSelector((state) => state.products.items); // 商品一覧を取得。
  const status = useSelector((state) => state.products.status); // データ取得の状態を取得（例: 'idle', 'loading', 'succeeded', 'failed'）。

  // `useEffect` フックを使用し、コンポーネントが初めてマウントされたとき、または `status` が変更されたときに実行される。
  // `status` が 'idle' の場合（まだデータ取得が行われていないとき）、`fetchProducts` アクションをディスパッチして商品データを取得。
  useEffect(() => {
    if (status === 'idle') {
      // データ取得の状態が 'idle' の場合にのみ API から商品を取得するアクションを発行。
      dispatch(fetchProducts());
    }
  }, [status, dispatch]); // `status` または `dispatch` が変更されると `useEffect` が再実行される。

  return (
    <div>
      <h2>Products</h2>
      {/* `products` 配列の各商品をループして表示。 */}
      {products.map((product) => (
        <div key={product.id}>
          {/* 商品のタイトルを表示。 */}
          <h3>{product.title}</h3>
          {/* ボタンを表示し、クリックすると `addItemToCart` アクションをディスパッチしてその商品をカートに追加。 */}
          <button onClick={() => dispatch(addItemToCart(product))}>
            Add to Cart {/* ボタンのテキストを表示 */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
// `Products` コンポーネントをデフォルトエクスポートし、他のコンポーネントやファイルで使用可能にする。
