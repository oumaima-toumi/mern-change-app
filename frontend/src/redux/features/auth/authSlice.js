import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload)); // Store in local storage
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo'); // Remove from local storage
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
