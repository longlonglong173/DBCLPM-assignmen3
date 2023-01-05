import React from "react";

import { RouteItemDef } from "types/routes.types";

import { SalaryPathsEnum } from "../constants/salary.paths";

const SalaryScreen = React.lazy(
  () => import("../screens/SalaryScreen/SalaryScreen")
);

const SALARY_SCREEN: RouteItemDef = {
  id: "salary",
  path: SalaryPathsEnum.SALARY,
  component: SalaryScreen,
  pageTitle: "BẢNG TÍNH LƯƠNG BÌNH QUÂN / NGƯỜI/ GIỜ",
  navigationTitle: "Lương bình quân",
};

const SALARY_ROUTES = [SALARY_SCREEN];

export default SALARY_ROUTES;
