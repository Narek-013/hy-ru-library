import { createSlice } from "@reduxjs/toolkit";

const downloadBtnSlice = createSlice({
  name: "downloadBtn",
  initialState: {
    oneLang:false,
    allLang:[
    { ed: false, name: "en", col: "1656697" },
    { ed: false, name: "ru", col: "1423051" },
    { ed: false, name: "hy", col: "68075" },
    { ed: false, name: "ar", col: "2507190" },
    { ed: false, name: "eu", col: "146707" },
    { ed: false, name: "zh", col: "617271" },
    { ed: false, name: "fr", col: "573287" },
    { ed: false, name: "mk", col: "256148" },
    { ed: false, name: "uk", col: "228474" },
  ]
  },
  reducers: {
    changeValue(state,{payload}) {
      return {
        ...state,
        allLang: state.allLang.map((el, idx) => (idx === payload ? { ...el, ed: !el.ed } : el)),
      };
    },
    changeLang(state) {
      return {
        ...state,
        oneLang:!state.oneLang
      }
    }
  },
});

export const selectDownloadBtn = (state) => state.downloadBtn;
export const downloadBtnReducer = downloadBtnSlice.reducer;
export const { changeValue, changeLang } = downloadBtnSlice.actions;
