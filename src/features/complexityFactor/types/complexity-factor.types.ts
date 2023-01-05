export type ComplexityFactorState = {
  list: ComplexityFactorType[];
};

export type ComplexityFactorType = {
  name: string;
  weight: number;
  ratingValue: number;
  note?: string;
};
