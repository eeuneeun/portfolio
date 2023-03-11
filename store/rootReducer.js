// /lib/slices/index.js
import {HYDRATE} from "next-redux-wrapper";

import {combineReducers} from '@reduxjs/toolkit';
import {authSlice} from './reducers/authSlice';
import {themeSlice} from "./reducers/themeSlice";
import {plantSlice} from "./reducers/plantSlice";
import {tokenSlice} from "./reducers/tokenSlice";
import {profitSlice} from "./reducers/profitSlice";
import {loadingSlice} from "./reducers/loadingSlice";

export const reducer = (state, action) => {
    console.log("root reducer")
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    }

    return combineReducers({
        authSlice : authSlice.reducer,
        themeSlice : themeSlice.reducer,
        plantSlice : plantSlice.reducer,
        tokenSlice : tokenSlice.reducer,
        profitSlice : profitSlice.reducer,
        loadingSlice : loadingSlice.reducer
    })(state, action);
}