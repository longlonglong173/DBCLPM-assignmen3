import { HOME_ROUTES } from "features/home/home";
import { SALARY_ROUTES } from "features/salary/salary";

export const ROOT_ROUTE = "/";
export const SALARY_ROUTE = "/salary";

export const ROUTE_LIST = [...SALARY_ROUTES, ...HOME_ROUTES];
