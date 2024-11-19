import { createSlice } from "@reduxjs/toolkit";
export const Counter = createSlice({
    name:"Counter",
    initialState:{num:0},
    reducers:{
        increment:(state,action) => {
        state.num += 1
      },
        decrement:(state,action) => {
        state.num -= 1

      }
    }
})

export const {increment,decrement} = Counter.actions;
export default Counter.reducer;