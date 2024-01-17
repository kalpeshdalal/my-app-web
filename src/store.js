import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import authenticationReducer from "./redux/reducers/authenticationReducer";

const rootReducers = {
  authenticationReducer: authenticationReducer,
};

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["authenticationReducer"],
};
const isDev = process.env.NODE_ENV === "development";
const rootReducer = combineReducers(rootReducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareLogger = !!isDev ? logger : [];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],      },
    }).concat(middlewareLogger),
});

export let persistor = persistStore(store);