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
    loginAdmin(state) {
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
    },
    logOutAdmin(state) {
      return {
        ...state,
        adminSt:false
      }
    }
  },
});

export const selectAdmin = (state) => state.admin;
export const adminReducer = adminSlice.reducer;
export const { loginAdmin, getAdmin, logOutAdmin } = adminSlice.actions;