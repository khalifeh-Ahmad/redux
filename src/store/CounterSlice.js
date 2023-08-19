import { createSlice } from "@reduxjs/toolkit";

const initState = { val: 1 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.val += action.payload;
    },
    decrease: (state, action) => {
      state.val -= 1;
    },
  },
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
