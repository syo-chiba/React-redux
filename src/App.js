import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; 
import ThemeButton from './components/ThemeButton'; 
import { ThemeProvider } from './context/ThemeContext'; 
import Counter from './components/Counter'; 
import CounterRedux from './components/CounterRedux'; 
import { CounterProvider } from './context/CounterContext'; 
import './App.css'; // 新しいCSSファイルをインポート

// 3.Reduxをよりシンプルに使用できるRedux Toolkitとは
import Products from './components/Products'; 
import Cart from './components/Cart'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* ナビゲーションメニューの設定。各リンクをクリックすると対応するコンポーネントに移動 */}
        <nav className="navbar">
          <ul className="nav-links">
            {/* 各ページへのリンク設定 */}
            <li>
              {/* "/"パスはTheme Switcherページに対応 */}
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              >
                Theme Switcher
              </NavLink>
            </li>
            <li>
              {/* "/counter"パスはCounterページに対応 */}
              <NavLink
                to="/counter"
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              >
                Counter
              </NavLink>
            </li>
            <li>
              {/* "/counterRedux"パスはReduxを使ったCounterページに対応 */}
              <NavLink
                to="/counterRedux"
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              >
                CounterRedux
              </NavLink>
            </li>
            <li>
              {/* "/cart"パスはCartページに対応 */}
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* ルーティング設定。各Routeが異なるURLパスに応じて特定のコンポーネントを表示 */}
        <div className="content">
          <Routes>
            {/* "/"のパスに対応するルート設定。ThemeProviderを使ってThemeButtonコンポーネントをラップし、テーマの状態を管理 */}
            <Route
              path="/"
              element={
                <ThemeProvider>
                  <div className="theme-section">
                    <h1>Theme Switcher</h1>
                    {/* テーマ切り替えボタン */}
                    <ThemeButton />
                  </div>
                </ThemeProvider>
              }
            />
            {/* "/counter"パスに対応するルート設定。CounterProviderでCounterコンポーネントをラップし、カウンター状態を管理 */}
            <Route
              path="/counter"
              element={
                <CounterProvider>
                  <div className="counter-section">
                    <h1>Counter</h1>
                    {/* シンプルなカウンターコンポーネント */}
                    <Counter />
                  </div>
                </CounterProvider>
              }
            />
            {/* "/counterRedux"パスに対応するルート設定。Reduxを用いたカウンター機能 */}
            <Route
              path="/counterRedux"
              element={
                <CounterProvider>
                  <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>Redux Counter App</h1>
                    {/* Reduxのカウンター機能を持つコンポーネント */}
                    <CounterRedux />
                  </div>
                </CounterProvider>
              }
            />
            {/* "/cart"パスに対応するルート設定。商品リストとカート情報を表示 */}
            <Route
              path="/cart"
              element={
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
                  <div>
                    <h1>Product List</h1>
                    {/* 商品リストを表示するコンポーネント */}
                    <Products />
                  </div>
                  <div>
                    <h1>Your Cart</h1>
                    {/* カートの中身を表示するコンポーネント */}
                    <Cart />
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
