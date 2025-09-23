import { createSlice } from "@reduxjs/toolkit";
const initialState : boolean = true
const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers:{
       changeLanguage: (state)=> {
          return !state
       }
    }
})
export const {changeLanguage} = languageSlice.actions
export default languageSlice.reducer