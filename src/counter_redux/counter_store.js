import { createStore } from 'redux';
import counterReducer from './counter_reducer';

export const store = createStore(counterReducer)