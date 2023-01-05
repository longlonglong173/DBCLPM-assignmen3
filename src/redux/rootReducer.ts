import { combineReducers } from "@reduxjs/toolkit";

import { actorReducer } from "features/actor/actor";
import { complexityFactorReducer } from "features/complexityFactor/complexity-factor";
import { laborTimeReducer } from "features/laborTime/labor-time";
import { salaryReducer } from "features/salary/salary";
import { softwareValuationReducer } from "features/softwareValuation/software-valuation";
import { usecasePointReducer } from "features/usecasePoint/usecase-point";

import { commonReducer } from "./common.slice";
import { snackbarReducer } from "./snackbar.slice";

const rootReducer = combineReducers({
  salary: salaryReducer,
  snackbar: snackbarReducer,
  common: commonReducer,
  actor: actorReducer,
  complexityFactor: complexityFactorReducer,
  laborTime: laborTimeReducer,
  usecasePoint: usecasePointReducer,
  softwareValuation: softwareValuationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
