import React from "react";

import { RouteItemDef } from "types/routes.types";

import { ComplexityFactorPathsEnum } from "../constants/complexity-factor.paths";

const ComplexityFactorScreen = React.lazy(
  () => import("../screens/ComplexityFactorScreen/ComplexityFactorScreen")
);

export const COMPLEXITY_FACTOR_SCREEN: RouteItemDef = {
  id: "complexityFactor",
  path: ComplexityFactorPathsEnum.COMPLEXITYFACTOR,
  component: ComplexityFactorScreen,
  pageTitle: "BẢNG TÍNH TOÁN HỆ SỐ PHỨC TẠP KỸ THUẬT-CÔNG NGHỆ",
  navigationTitle: "Hệ số phức tạp KT-CN",
};

export const COMPLEXITY_FACTOR_ROUTES = [COMPLEXITY_FACTOR_SCREEN];
