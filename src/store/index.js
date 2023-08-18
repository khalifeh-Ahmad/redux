import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initState = { val: 1, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.val += 1;
    },
    decrease: (state, action) => {
      state.val -= 1;
    },
  },
});

const counterReducer = (state = initState, action) => {
  //console.log(state);
  //logic

  if (action.type === "increase") {
    return { ...state, val: state.val + action.payload.number };
  }
  if (action.type === "decrease") {
    return { ...state, val: state.val - action.payload.number };
  }
  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = configureStore({
  reducer: counterReducer,
});
//const store1 = createStore(counterReducer);

export default store;
