import { createStore } from 'redux';
import { loadState, saveState } from '../localStorage/localStorage';
import throttle from 'lodash/throttle.js';
import { counterReducer } from '../reducer/reducer';

const persistedState = loadState();

export const store = createStore(counterReducer, persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

store.subscribe(
    throttle(() => {
        saveState(store.getState());
    }, 1000)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
