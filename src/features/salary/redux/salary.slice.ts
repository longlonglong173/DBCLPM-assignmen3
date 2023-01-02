import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { SalaryState } from "../types/salary.types";
// import { LoginDataDef, AuthState } from "../types/salary.types";

// export const postLogin = createAsyncThunk(
//   "auth/postLogin",
//   async (data: LoginDataDef) => {
//     const response = await authApi.signIn(data);
//     return response.data.data;
//   }
// );

const initialState: SalaryState = {
  accessToken: "",
};

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {},
  // extraReducers: builder => {
  //   // builder.addCase(postLogin.fulfilled, (state, action) => {
  //   //   state.accessToken = action.payload.accessToken;
  //   // });
  //   // builder.addCase(postLogin.rejected, (state) => {
  //   //   state.accessToken = null;
  //   // });
  // },
});

const salaryConfig = {
  key: "salary",
  storage,
  whitelist: ["accessToken"],
};

export const salaryReducer = persistReducer(salaryConfig, salarySlice.reducer);
