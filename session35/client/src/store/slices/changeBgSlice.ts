import { createSlice } from "@reduxjs/toolkit";
const initialState : boolean = true
const changeBgSlice = createSlice({
  name: "changeBg",
  initialState,
  reducers: {
    change: (state) => { 
         return !state
    },
  },
});
export const {change} = changeBgSlice.actions
export default changeBgSlice.reducer
