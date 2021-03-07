import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from './Utils/combineReducers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById("root")
);