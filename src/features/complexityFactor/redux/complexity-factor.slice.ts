import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import dataImport from "mock-data/complexity-factor.json";

import {
  ComplexityFactorState,
  ComplexityFactorType,
} from "../types/complexity-factor.types";

const initialState: ComplexityFactorState = {
  list: dataImport,
};

const complexityFactorSlice = createSlice({
  name: "complexityFactor",
  initialState,
  reducers: {
    addNewComplexityFactor(state, action: PayloadAction<ComplexityFactorType>) {
      state.list.push(action.payload);
    },
    removeComplexityFactorByIndex(state, { payload }: PayloadAction<number>) {
      state.list.splice(payload, 1);
    },
    editComplexityFactorByIndex(
      state,
      action: PayloadAction<{ index: number; data: ComplexityFactorType }>
    ) {
      const { index, data } = action.payload;
      state.list[index] = data;
    },
    // getTCF({ list }) {
    //   return list.reduce(
    //     (init, currentItem) =>
    //       +init + +currentItem.ratingValue * +currentItem.weight,
    //     0
    //   );
    // },
  },
  // extraReducers: builder => {},
});

export const {
  addNewComplexityFactor,
  removeComplexityFactorByIndex,
  editComplexityFactorByIndex,
} = complexityFactorSlice.actions;

const complexityFactorConfig = {
  key: "complexityFactor",
  storage,
};

export const complexityFactorReducer = persistReducer(
  complexityFactorConfig,
  complexityFactorSlice.reducer
);
