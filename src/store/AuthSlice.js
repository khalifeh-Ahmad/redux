import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogged: false },
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
});
export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
