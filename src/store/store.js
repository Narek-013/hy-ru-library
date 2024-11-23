import { configureStore } from "@reduxjs/toolkit";
import { wordsReducer } from "./Slices/wordsSlice/wordsSlice";

export const store = configureStore({
  reducer: {
    words: wordsReducer,
  },
});