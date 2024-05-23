import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { userApiSlice } from './api/usersApiSlice';
import authReducer from './features/auth/authSlice';

const preloadedState = {
    auth: {
      userInfo: localStorage.getItem('userInfo')
        
    },
  };
const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
  devTools: true,
  preloadedState,
});

setupListeners(store.dispatch);

export default store;
