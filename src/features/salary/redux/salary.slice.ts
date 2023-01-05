import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import dataImport from "mock-data/salary.json";

import { SalaryState, SalaryType } from "../types/salary.types";
// import { LoginDataDef, AuthState } from "../types/salary.types";

// export const postLogin = createAsyncThunk(
//   "auth/postLogin",
//   async (data: LoginDataDef) => {
//     const response = await authApi.signIn(data);
//     return response.data.data;
//   }
// );

const initialState: SalaryState = {
  list: dataImport,
};

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {
    resetSalaryList(state) {
      state.list = [];
    },
    addNewSalary(state, action: PayloadAction<SalaryType>) {
      state.list.push(action.payload);
    },
    removeSalaryByIndex(state, action: PayloadAction<number>) {
      state.list.splice(action.payload, 1);
    },
    updateSalaryByIndex(
      state,
      {
        payload: { index, data },
      }: PayloadAction<{ index: number; data: SalaryType }>
    ) {
      state.list[index] = data;
    },
  },
  // extraReducers: builder => {
  //   // builder.addCase(postLogin.fulfilled, (state, action) => {
  //   //   state.accessToken = action.payload.accessToken;
  //   // });
  //   // builder.addCase(postLogin.rejected, (state) => {
  //   //   state.accessToken = null;
  //   // });
  // },
});

export const { addNewSalary, removeSalaryByIndex, updateSalaryByIndex } =
  salarySlice.actions;

const salaryConfig = {
  key: "salary",
  storage,
};

export const salaryReducer = persistReducer(salaryConfig, salarySlice.reducer);
