import { UsecasePointTypeName } from "../types/usecase-point.types";

export enum UsecasePointPathsEnum {
  USECASE_POINT = "/usecase-point",
}

export const VN_NAME: Record<UsecasePointTypeName, string> = {
  simple: "Đơn giản",
  medium: "Trung bình",
  complex: "Phức tạp",
};
