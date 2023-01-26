import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../addContactSlice/addContactSlice";
import { filtersReducer } from "../filterSlice/filterSlice";

import storage from 'redux-persist/lib/storage';
import {
   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const rootReducer = combineReducers(
  {
    contacts: contactsReducer,
    filters: filtersReducer,
  }
);

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});