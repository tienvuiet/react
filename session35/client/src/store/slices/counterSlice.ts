import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({  
    name: "counter", 
    initialState : {
        value: 0

    },
    reducers: {
        increment : (state) =>{
              state.value ++
        },
        decrement : (state) =>{
            state.value --
        },
        resetN : (state) =>{
            state.value =0
        }
    }
})
//tra ve object chua cac hanh dong
export const {increment, decrement, resetN}  = counterSlice.actions
export default counterSlice.reducer