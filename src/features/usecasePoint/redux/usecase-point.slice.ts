import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import dataImport from "mock-data/usecase-point.json";

import {
  CaseType,
  UsecasePointState,
  UsecasePointType,
  UsecasePointTypeName,
} from "../types/usecase-point.types";

const initialState: UsecasePointState = {
  list: dataImport,
};

const usecasePointSlice = createSlice({
  name: "usecasePoint",
  initialState,
  reducers: {
    addNewUsecasePoint(state, { payload }: PayloadAction<UsecasePointType>) {
      state.list.push(payload);
    },
    editUsecaseNameByIndex(
      state,
      {
        payload: { index, name },
      }: PayloadAction<{ index: number; name: string }>
    ) {
      state.list[index].name = name;
    },
    editUsecasePointByIndex(
      state,
      {
        payload: { index, type, data },
      }: PayloadAction<{
        index: number;
        type: UsecasePointTypeName;
        data: CaseType;
      }>
    ) {
      state.list[index].data[type] = data;
    },
    removeUsecasePointByIndex(
      state,
      { payload: index }: PayloadAction<number>
    ) {
      state.list.splice(index, 1);
    },
  },
});

export const {
  addNewUsecasePoint,
  editUsecasePointByIndex,
  editUsecaseNameByIndex,
  removeUsecasePointByIndex,
} = usecasePointSlice.actions;

const usecasePointConfig = {
  key: "usecasePoint",
  storage,
};

export const usecasePointReducer = persistReducer(
  usecasePointConfig,
  usecasePointSlice.reducer
);
