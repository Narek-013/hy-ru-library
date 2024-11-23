import { createSlice } from "@reduxjs/toolkit";

export const wordsSlice = createSlice({
  name: "words",
  initialState: {
    day: 0,
    words: "", 
  },
  reducers: {
    newDay(state, { payload }) {
      state.day = payload.day; 
      state.words = payload.words;
    },
  },
  extraReducers: (builder) => {
  },
});

export const selectWords = (state) => state.words; 

export const wordsReducer = wordsSlice.reducer;
export const { newDay } = wordsSlice.actions;
