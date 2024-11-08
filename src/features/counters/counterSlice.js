import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];
const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counter = state.find((c) => c.id === action.payload);
      if (counter) {
        counter.value++;
      } else {
        console.error(`Counter with id ${action.payload} not found`);
      }
    },
    decrement: (state, action) => {
      const counter = state.find((c) => c.id === action.payload);
      if (counter) {
        counter.value--;
      } else {
        console.error(`Counter with id ${action.payload} not found`);
      }
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
