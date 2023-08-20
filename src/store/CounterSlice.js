import { createSlice } from "@reduxjs/toolkit";

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
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
