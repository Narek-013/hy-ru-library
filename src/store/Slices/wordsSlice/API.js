import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChangeText = createAsyncThunk("words/fetchChangeText", async ([word, day, newText, idx]) => {
  try {
    const response = await fetch("https://hyrus-production.up.railway.app/api/data/update-word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wordKey: day,
        targetKey: word.key,
        newValue: newText,
      }),
    });

    const dataResult = await response.json();

    const firstValue = Object.values(dataResult.data)[0];

    return [firstValue, idx,newText];
  } catch (error) {
    console.error("Error:", error);
  }
});