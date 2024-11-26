import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name:"burger",
    initialState:false,
    reducers:{
        toggleMenu(state) {
            return !state
        },
        closeMenuBurger() {
            return false
        }
    }
})


export const selectBurger = (state) => state.burger;
export const { toggleMenu, closeMenuBurger } = headerSlice.actions;
export const headerReducer = headerSlice.reducer