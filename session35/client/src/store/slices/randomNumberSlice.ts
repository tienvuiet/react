import { createSlice } from "@reduxjs/toolkit";
const initialState : number[] = []
const randomSlice = createSlice({
    name: "random",
    initialState,
    reducers:{
        random : (state ) =>{
            state.push(Math.floor(Math.random()*1000))
        }
    }
})
export const {random} = randomSlice.actions
export default randomSlice.reducer