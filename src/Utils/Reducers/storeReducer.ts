import { IStore, IUpdateStore } from "./actionTypes";
import { UPDATE_STORE } from "./constants";

const INITIAL_STATE: IStore = {
    title: '',
    showDrawer: null
};

const storeReducer = (state = INITIAL_STATE, { type, payload } : IUpdateStore): IStore => {
    switch(type) {
        case UPDATE_STORE: {
            return payload;
        }

        default: {
            return state;
        }
    }
}

export const updateStore = (state: IStore): IUpdateStore => {
    return {
        type: UPDATE_STORE,
        payload: state
    };
} 

export default storeReducer;