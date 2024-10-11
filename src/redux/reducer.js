import { INCREMENT, DECREMENT } from './actions';
// `actions.js` ファイルからアクションタイプをインポート。
// アクションタイプは状態を変更する際の命令書のような役割を持ち、アクションがどのような処理を行うかを識別します。
// 例えば、`INCREMENT` はカウントを増加させるアクション、`DECREMENT` はカウントを減少させるアクションです。

// 1. 初期状態を定義
// カウンターの初期状態を設定。`count` プロパティを持つオブジェクトを初期状態として設定しています。
const initialState = { count: 0 };

// 2. リデューサーを定義
// `counter` という名前のリデューサー関数を定義。
// リデューサーは、現在の状態 (`state`) とアクション (`action`) を受け取り、
// アクションの種類に応じて新しい状態を返します。
const counter = (state = initialState, action) => {
  // 受け取ったアクションの `type` に基づいて状態を変更
  switch (action.type) {
    case INCREMENT:
      // `INCREMENT` アクションの場合、現在の `count` を 1 増やした新しい状態を返す
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      // `DECREMENT` アクションの場合、現在の `count` を 1 減らした新しい状態を返す
      return { ...state, count: state.count - 1 };

    default:
      // どのアクションにも一致しない場合は現在の状態をそのまま返す
      return state;
  }
};

// 3. デフォルトエクスポート
// このリデューサーを `counter` という名前でエクスポートし、他のファイルで使用できるようにします。
export default counter;
