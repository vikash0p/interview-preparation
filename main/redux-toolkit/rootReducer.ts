import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './services/baseApi';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});
