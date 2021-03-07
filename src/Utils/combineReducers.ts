import { combineReducers } from "redux";
import storeReducer from "./Reducers/storeReducer";

const reducers = combineReducers({
    store: storeReducer
});

export default reducers;