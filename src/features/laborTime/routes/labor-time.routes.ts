import React from "react";

import { RouteItemDef } from "types/routes.types";

import { LaborTimePathsEnum } from "../constants/labor-time.paths";

const LaborTimeScreen = React.lazy(
  () => import("../screens/LaborTimeScreen/LaborTimeScreen")
);

export const LABOR_TIME_SCREEN: RouteItemDef = {
  id: "laborTime",
  path: LaborTimePathsEnum.LABOR_TIME,
  component: LaborTimeScreen,
  pageTitle:
    "TÍNH TOÁN HỆ SỐ TÁC ĐỘNG MÔI TRƯỜNG VÀ NHÓM LÀM VIỆC, HỆ SỐ PHỨC TẠP VỀ MÔI TRƯỜNG, XÁC ĐỊNH ĐỘ ỔN ĐỊNH KINH NGHIỆM VÀ NỘI SUY THỜI GIAN LAO ĐỘNG (P)",
  navigationTitle: "Hệ số PTMT - KN - nội suy",
};

export const LABOR_TIME_ROUTES = [LABOR_TIME_SCREEN];
