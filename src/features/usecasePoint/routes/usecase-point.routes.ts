import React from "react";

import { RouteItemDef } from "types/routes.types";

import { UsecasePointPathsEnum } from "../constants/usecase-point.paths";

const UsecasePointScreen = React.lazy(
  () => import("../screens/UsecasePointScreen/UsecasePointScreen")
);

export const USECASE_POINT_SCREEN: RouteItemDef = {
  id: "usecasePoint",
  path: UsecasePointPathsEnum.USECASE_POINT,
  component: UsecasePointScreen,
  pageTitle: "BẢNG TÍNH TOÁN ĐIỂM CÁC TRƯỜNG HỢP SỬ DỤNG",
  navigationTitle: "Điểm use case",
};

export const USECASE_POINT_ROUTES = [USECASE_POINT_SCREEN];
