export type ActorState = Record<ActorTypeName, ActorType>;

export type ActorTypeName = "simple" | "medium" | "complex";

export type ActorType = {
  type: ActorTypeEnum;
  desc: string;
  amount: number;
  point: number;
  note?: string;
};

export enum ActorTypeEnum {
  SIMPLE = 1,
  MEDIUM = 2,
  COMPLEX = 3,
}
