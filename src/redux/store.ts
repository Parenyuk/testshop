import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import { cartPageReducer } from './cartPageReducer';

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

const rootReducer = combineReducers({
    cartPage: cartPageReducer
})



export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer, applyMiddleware(thunk));


