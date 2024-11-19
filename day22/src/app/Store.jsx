import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../feature/CounterSlice";

export const store = configureStore({
   reducer:{
    Counterkey: CounterSlice
   }
})