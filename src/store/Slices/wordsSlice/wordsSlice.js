import { createSlice } from "@reduxjs/toolkit";
import { fetchChangeText } from "./API";

export const wordsSlice = createSlice({
  name: "words",
  initialState: {
    day: 0,
    words: {},
    wordArray:[],
  },
  reducers: {
    newDay(state, { payload }) {
      state.day = payload.day;
      state.words = payload.words;
      state.wordArray = state.words
        ? Object.entries(payload.words).map(([key, value]) => ({
            key,
            value,
            isEdit: false,
          }))
        : [];
    },
    editItem(state,{payload}) {
      
      return {
        ...state,
        wordArray: state.wordArray.map((el,index) => index === payload ? {...el,isEdit:!el.isEdit} : el)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChangeText.fulfilled, (state,{payload}) => {
      
      
      return {
        ...state,
        wordArray: state.wordArray.map((el,index) => index === payload[1] ? {...el,value:payload[2],isEdit:false} : el)
      }
    });
  },
});

export const selectWords = (state) => state.words; 

export const wordsReducer = wordsSlice.reducer;
export const { newDay, editItem } = wordsSlice.actions;
