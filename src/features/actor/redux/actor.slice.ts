import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { simple, medium, complex } from "mock-data/actor.json";

import { ActorState, ActorType, ActorTypeName } from "../types/actor.types";

const initialState: ActorState = {
  simple,
  medium,
  complex,
};

const actorSlice = createSlice({
  name: "actor",
  initialState,
  reducers: {
    setActorStoreValue(
      state,
      action: PayloadAction<{ type: ActorTypeName; data: ActorType }>
    ) {
      const { type, data } = action.payload;
      state[type] = data;
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

export const { setActorStoreValue } = actorSlice.actions;

const actorConfig = {
  key: "actor",
  storage,
};

export const actorReducer = persistReducer(actorConfig, actorSlice.reducer);
