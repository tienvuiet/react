import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../utils/types";
import { change } from "./changeBgSlice";
const initialState: User[] = [
  {
    id: 1,
    name: "Nguyen van A",
    love: true,
  },
  {
    id: 2,
    name: "Vu Việt Tiến",
    love: true,
  },
  {
    id: 3,
    name: "Nguyễn Minh Đức",
    love: false,
  },
];
const loveSlice = createSlice({
  name: "love",
  initialState,
  reducers: {
    changeLove: (state, action: PayloadAction<number>) => {
      const u = state.find((x) => x.id === action.payload);
      if (u) {
        u.love = !u.love;
      }
    },
  },
});

export const { changeLove } = loveSlice.actions;
export default loveSlice.reducer;
