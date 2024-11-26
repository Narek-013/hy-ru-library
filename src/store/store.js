import { configureStore } from "@reduxjs/toolkit";
import { wordsReducer } from "./Slices/wordsSlice/wordsSlice";
import { headerReducer } from "./Slices/headerSlice/headerSlice";

export const store = configureStore({
  reducer: {
    words: wordsReducer,
    burger: headerReducer,
  },
});