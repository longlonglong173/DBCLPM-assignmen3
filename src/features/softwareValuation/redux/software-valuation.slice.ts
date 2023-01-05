import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { SoftwareValuationState } from "../types/software-valuation.types";

const initialState: SoftwareValuationState = {};

const softwareValuationSlice = createSlice({
  name: "softwareValuation",
  initialState,
  reducers: {},
});

// export const {} = softwareValuationSlice.actions;

const softwareValuationConfig = {
  key: "softwareValuation",
  storage,
};

export const softwareValuationReducer = persistReducer(
  softwareValuationConfig,
  softwareValuationSlice.reducer
);
