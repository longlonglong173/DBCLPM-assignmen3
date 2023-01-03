export const formatNumber = (num: number) => {
  return Intl.NumberFormat().format(num);
};
