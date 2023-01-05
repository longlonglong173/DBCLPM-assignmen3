export type LaborTimeState = {
  data: Record<LaborTimeTypeName, LaborTimeType[]>;
  P: number;
};

export type LaborTimeType = {
  type?: LaborTimeTypeName;
  name: string;
  weight: number;
  ratingValue: number;
  experienceStability: number;
};

export type LaborTimeTypeName = "member" | "project";
