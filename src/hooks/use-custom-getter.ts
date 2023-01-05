import { useAppSelector } from "redux/store";

export const useGetTAW = (): number => {
  const { complex, medium, simple } = useAppSelector(state => state.actor);

  return simple.point + medium.point + complex.point;
};

export const useGetTFW = (): number => {
  const { list } = useAppSelector(state => state.complexityFactor);

  return list.reduce(
    (init, currentItem) =>
      +init + +currentItem.ratingValue * +currentItem.weight,
    0
  );
};

export const useGetTCF = (): number => {
  const TFW = useGetTFW();
  return 0.6 + 0.01 * TFW;
};

export const useGetEFW = (): number => {
  const { member, project } = useAppSelector(state => state.laborTime.data);

  return [...member, ...project].reduce(
    (init, currentItem) =>
      +init + +currentItem.ratingValue * +currentItem.weight,
    0
  );
};

export const useGetEF = (): number => {
  const EFW = useGetEFW();

  return +(1.4 - 0.03 * EFW).toFixed(4);
};

export const useGetES = (): number => {
  const { member, project } = useAppSelector(state => state.laborTime.data);

  return [...member, ...project].reduce(
    (init, currentItem) => +init + +currentItem.experienceStability,
    0
  );
};

export const useGetTBF = (): number => {
  const { list } = useAppSelector(state => state.usecasePoint);

  return list.reduce(
    (init, current) =>
      init +
      current.data.simple.point +
      current.data.medium.point +
      current.data.complex.point,
    0
  );
};
