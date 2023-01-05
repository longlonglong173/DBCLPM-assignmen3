export type UsecasePointState = {
  list: UsecasePointType[];
};

export type UsecasePointType = {
  name: string;
  data: {
    simple: CaseType;
    medium: CaseType;
    complex: CaseType;
  };
};

export type CaseType = {
  amount: number;
  point: number;
};

export type UsecasePointTypeName = "simple" | "medium" | "complex";
