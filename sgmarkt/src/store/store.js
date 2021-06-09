import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import * as reducersMerge from "../reducers";

let createStores = combineReducers({
    ...reducersMerge
});

export default createStore(
    createStores,
    applyMiddleware(thunk)
);
