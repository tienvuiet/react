import { createSlice } from "@reduxjs/toolkit";
import type { Student } from "../../utils/types";
const initialState : Student[] = [
      {
        id: 1,
        name: "Minh thu",
      },
      {
        id: 2,
        name: "Minh Huyen",
      },
    ];

export interface Action {
    type : string,
    payload : Student
}

const studentSlice = createSlice({
  name: "student",
  initialState ,
  reducers: {
   addStudent : (state ,action) => {
     state.push(action.payload);
   },
   deleteStudent : (state ,action ) => {
   return state.filter((s) => s.id !== action.payload)
   }
    }
});
// destructoring
export const {addStudent, deleteStudent} =studentSlice.actions
export default studentSlice.reducer