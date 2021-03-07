import { UPDATE_STORE, CLEAN_STORE } from './constants';

//Store

export interface IReducers {
    store: IStore
}

//Pyaload interfaces
export interface IStore {
    title?: string,
    showDrawer?: null | boolean
}

//Action types

export interface IUpdateStore {
    type: typeof UPDATE_STORE,
    payload: IStore
}