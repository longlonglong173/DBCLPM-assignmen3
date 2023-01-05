import React from "react";

import { RouteItemDef } from "types/routes.types";

import { SoftwareValuationPathsEnum } from "../constants/software-valuation.paths";

const SoftwareValuationScreen = React.lazy(
  () => import("../screens/SoftwareValuationScreen/SoftwareValuationScreen")
);

export const SOFTWARE_VALUATION_SCREEN: RouteItemDef = {
  id: "softwareValuation",
  path: SoftwareValuationPathsEnum.SOFTWARE_VALUATION,
  component: SoftwareValuationScreen,
  pageTitle: "BẢNG XÁC ĐỊNH GIÁ PHẦN MỀM",
  navigationTitle: "Định giá phần mềm",
};

export const SOFTWARE_VALUATION_ROUTES = [SOFTWARE_VALUATION_SCREEN];
