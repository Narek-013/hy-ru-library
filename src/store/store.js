import { configureStore } from "@reduxjs/toolkit";
import { wordsReducer } from "./Slices/wordsSlice/wordsSlice";
import { headerReducer } from "./Slices/headerSlice/headerSlice";
import { downloadBtnReducer } from "./Slices/downloadBtn/downloadBtn";



export const store = configureStore({
  reducer: {
    words: wordsReducer,
    burger: headerReducer,
    downloadBtn:downloadBtnReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});