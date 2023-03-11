// /store.js
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from "redux-logger";
import {createWrapper} from "next-redux-wrapper";
import {reducer} from './rootReducer'

const makeStore = (context) => configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
});
