import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchChangeText = createAsyncThunk("words/fetchChangeText", async ([word, day, newText, idx]) => {
  try {
    const response = await fetch("https://hyrus-production.up.railway.app/api/ru/update-word", {
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

    
    return [firstValue, idx, newText];
  } catch (error) {
    console.error("Error:", error);
  }
});

// export const fetchResponseForRow = createAsyncThunk("actionPlanner/fetchResponseForRow", async (wordArray) => {
//   const cohereApiKey = "OyYxXlFPxmLyZsqUEVScUHpFOTt1nz0vyPlaXJ37";
//   const query = `Return my provided array and translate the words under the key into Armenian, place them under the value, and return the array in the same format.`;

//   let queryWord = wordArray.map((el) => {
//     return el.key;
//   });

  
//   try {
//     const response = await axios.post(
//       "https://api.cohere.ai/v1/generate",
//       {
//         model: "command-xlarge-nightly",
//         prompt: query + JSON.stringify(wordArray),
//         max_tokens: 200,
//         temperature: 0.7,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${cohereApiKey}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log(response.data.generations[0].text);
    
//     // return response.data.generations[0].text;
//   } catch (error) {}
// });
