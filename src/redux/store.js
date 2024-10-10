import { createStore } from 'redux';
import counterReducer from './reducer';

// ストアを作成
const store = createStore(counterReducer);

export default store;
