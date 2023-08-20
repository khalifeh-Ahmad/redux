import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogged: false },
  reducers: {
    login: (state) => {
      state.isLogged = !state.isLogged;
    },
    // logout: (state) => {
    //   state.isLogged = false;
    // },
  },
});
export default authSlice.reducer;
export const { login } = authSlice.actions;
