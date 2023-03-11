import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    isAdmin: false,
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setIsAdmin : (state, action) => {
      state.isAdmin = action.payload;
    }, 
  },
});


export const asyncDispatchLogin = state => dispatch => {
  setTimeout(() => {
    dispatch(setIsLogin(state));
  }, 1000);
};

export const { login, setIsLogin, setIsAdmin } = authSlice.actions;
export const authSelector = state => state.auth;



export default authSlice.reducer;
