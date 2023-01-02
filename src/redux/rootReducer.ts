import { combineReducers } from "@reduxjs/toolkit";

import { salaryReducer } from "features/salary/salary";

import { commonReducer } from "./common.slice";
import { snackbarReducer } from "./snackbar.slice";

const rootReducer = combineReducers({
  salary: salaryReducer,
  snackbar: snackbarReducer,
  common: commonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
