import { createSlice } from "@reduxjs/toolkit";
const initialState: boolean = true
const menuSlice = createSlice({ 
    name: "menuSlice",
    initialState,
    reducers: {
        changeMenu : (state)=>{
            return !state
        }
    }
})
export const {changeMenu} = menuSlice.actions
export default menuSlice.reducer