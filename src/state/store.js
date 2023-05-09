import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "state"
import { apiQuerys } from "state/apiQuerys"
import { apiMutations } from 'state/apiMutations';

const persistConfig = {
  key: 'global',
  storage,
};

const reducers = combineReducers({
  global: globalReducer,
  [apiQuerys.reducerPath]: apiQuerys.reducer,
  [apiMutations.reducerPath]: apiMutations.reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiQuerys.middleware, apiMutations.middleware),
});