import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import ThemeButton from './components/ThemeButton';
import { ThemeProvider } from './context/ThemeContext';
import Counter from './components/Counter';
import CounterRedux from './components/CounterRedux';
import { CounterProvider } from './context/CounterContext';
import './App.css'; // 新しいCSSファイルをインポート

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* ナビゲーションメニュー */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                Theme Switcher
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/counter"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                Counter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/counterRedux"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                CounterRedux
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* 各コンポーネントのルーティング設定 */}
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <ThemeProvider>
                  <div className="theme-section">
                    <h1>Theme Switcher</h1>
                    <ThemeButton />
                  </div>
                </ThemeProvider>
              }
            />
            <Route
              path="/counter"
              element={
                <CounterProvider>
                  <div className="counter-section">
                    <h1>Counter</h1>
                    <Counter />
                  </div>
                </CounterProvider>
              }
            />
            <Route
              path="/counterRedux"
              element={
                <CounterProvider>
                  <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>Redux Counter App</h1>
                    <CounterRedux />
                  </div>
                </CounterProvider>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
