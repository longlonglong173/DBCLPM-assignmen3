import React from "react";

import { RouteItemDef } from "types/routes.types";

import { ActorPathsEnum } from "../constants/actor.paths";

const ActorScreen = React.lazy(
  () => import("../screens/ActorScreen/ActorScreen")
);

export const ACTOR_SCREEN: RouteItemDef = {
  id: "actor",
  path: ActorPathsEnum.ACTOR,
  component: ActorScreen,
  pageTitle: "BẢNG TÍNH TOÁN ĐIỂM CÁC TÁC NHÂN (ACTORS) TƯƠNG TÁC",
  navigationTitle: "Điểm tác nhân (actors) tương tác",
};

export const ACTOR_ROUTES = [ACTOR_SCREEN];
