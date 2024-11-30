import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminUser: {
      admin:"Narek",
      login: "adminNarek",
      password: "adminNarek13",
    },
    adminSt: false,
  },
  reducers: {
    loginAdmin(state, { payload }) {
      return {
        ...state,
        adminSt:true
      };
    },
    getAdmin(state,{payload}) {      
      return {
        ...state,
        adminSt:payload
      }
    }
  },
});

export const selectAdmin = (state) => state.admin;
export const adminReducer = adminSlice.reducer;
export const { loginAdmin, getAdmin } = adminSlice.actions;