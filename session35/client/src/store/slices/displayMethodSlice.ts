import { createSlice } from "@reduxjs/toolkit";
const initialState: boolean = true
const displayMethodSlice = createSlice({    
    name: "displayMethod",
    initialState,
    reducers:{
        changeDisplay: (state) =>{
            return !state
        }
    }
})
export const {changeDisplay}  = displayMethodSlice.actions
export default displayMethodSlice.reducer