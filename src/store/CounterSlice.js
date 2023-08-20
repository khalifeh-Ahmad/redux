import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./AuthSlice";

const initState = { val: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.val += action.payload;
    },
    decrease: (state, action) => {
      state.val -= action.payload;
    },
  },
  extraReducers: {
    [logout]: (state, action) => {
      state.val = 0;
    },
  },
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
