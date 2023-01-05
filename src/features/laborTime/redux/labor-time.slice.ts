import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { member, project } from "mock-data/labor-time.json";

import {
  LaborTimeState,
  LaborTimeType,
  LaborTimeTypeName,
} from "../types/labor-time.types";

const initialState: LaborTimeState = {
  data: {
    member,
    project,
  },
  P: 0,
};

const laborTimeSlice = createSlice({
  name: "laborTime",
  initialState,
  reducers: {
    addNewLaborTime(
      state,
      {
        payload: { type, data },
      }: PayloadAction<{ type: LaborTimeTypeName; data: LaborTimeType }>
    ) {
      state.data[type].push(data);
    },
    removeLaborTimeByIndex(
      state,
      {
        payload: { type, index },
      }: PayloadAction<{ type: LaborTimeTypeName; index: number }>
    ) {
      state.data[type].splice(index, 1);
    },
    editLaborTimeByIndex(
      state,
      {
        payload: { type, index, data },
      }: PayloadAction<{
        type: LaborTimeTypeName;
        index: number;
        data: LaborTimeType;
      }>
    ) {
      state.data[type][index] = data;
    },
    editP(state, { payload }: PayloadAction<number>) {
      state.P = payload;
    },
  },
});

export const {
  addNewLaborTime,
  removeLaborTimeByIndex,
  editLaborTimeByIndex,
  editP,
} = laborTimeSlice.actions;

const laborTimeConfig = {
  key: "laborTime",
  storage,
};

export const laborTimeReducer = persistReducer(
  laborTimeConfig,
  laborTimeSlice.reducer
);
