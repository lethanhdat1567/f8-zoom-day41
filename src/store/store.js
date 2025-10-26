import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import productReducer from "./product/reducer";
import uiReducer from "./ui/reducer";

const rootReducer = combineReducers({
    product: productReducer,
    ui: uiReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
