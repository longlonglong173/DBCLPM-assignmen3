import { ACTOR_ROUTES } from "features/actor/actor";
import { COMPLEXITY_FACTOR_ROUTES } from "features/complexityFactor/complexity-factor";
import { HOME_ROUTES } from "features/home/home";
import { LABOR_TIME_ROUTES } from "features/laborTime/labor-time";
import { SALARY_ROUTES } from "features/salary/salary";
import { SOFTWARE_VALUATION_ROUTES } from "features/softwareValuation/software-valuation";
import { USECASE_POINT_ROUTES } from "features/usecasePoint/usecase-point";

export const ROUTE_LIST = [
  ...SALARY_ROUTES,
  ...ACTOR_ROUTES,
  ...COMPLEXITY_FACTOR_ROUTES,
  ...LABOR_TIME_ROUTES,
  ...USECASE_POINT_ROUTES,
  ...SOFTWARE_VALUATION_ROUTES,
  ...HOME_ROUTES,
];
