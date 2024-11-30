import { configureStore } from "@reduxjs/toolkit";
import { wordsReducer } from "./Slices/wordsSlice/wordsSlice";
import { headerReducer } from "./Slices/headerSlice/headerSlice";
import { downloadBtnReducer } from "./Slices/downloadBtn/downloadBtn";
import { adminReducer } from "./Slices/admin/adminSlice.js";
import { emptyAdmin, ignorEmptyAdmin } from "./Middleware/Admin.js";



export const store = configureStore({
  reducer: {
    words: wordsReducer,
    burger: headerReducer,
    downloadBtn: downloadBtnReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ignorEmptyAdmin, emptyAdmin],
});