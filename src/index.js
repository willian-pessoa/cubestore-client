import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "state"
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiQuerys } from "state/apiQuerys"
import { apiMutations } from 'state/apiMutations';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [apiQuerys.reducerPath]: apiQuerys.reducer,
    [apiMutations.reducerPath]: apiMutations.reducer
  },
  middleware: (getDefault) => getDefault().concat(apiQuerys.middleware, apiMutations.middleware),
})
setupListeners(store.dispatch)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

