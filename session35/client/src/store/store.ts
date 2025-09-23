import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice";
import students from "./slices/studentSlice";
import randomNew from "./slices/randomNumberSlice";
import changeBg from "./slices/changeBgSlice";
import displayMt from "./slices/displayMethodSlice";
import menuChange from "./slices/menuSlice";
import changeLanguage from "./slices/languageSlice";
import changeLove from "./slices/LoveSlice";

export const store = configureStore({
  reducer: {
    counter,
    students,
    randomNew,
    changeBg,
    displayMt,
    menuChange,
    changeLanguage,
    changeLove,
  },
});
export type RootState = ReturnType<typeof store.getState>;
