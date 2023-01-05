import { WORKS_HOUR_PER_MONTH } from "constants/commont.constants";
import { useAppSelector } from "redux/store";

export const useGetTotalSalaryPerMonth = (): number => {
  const { list } = useAppSelector(state => state.salary);

  return list.reduce(
    (init, { salaryPerMonth, amount }) => init + salaryPerMonth * amount,
    0
  );
};

export const useGetAvgSalaryPersonalPerMonth = (): number => {
  const { list } = useAppSelector(state => state.salary);
  const totalSalaryPerMonth = useGetTotalSalaryPerMonth();

  return Math.round(
    totalSalaryPerMonth / list.reduce((init, { amount }) => init + +amount, 0)
  );
};

export const useGetAvgPersonPerHour = (): number => {
  const avgSalaryPersonalPerMonth = useGetAvgSalaryPersonalPerMonth();

  return Math.round(avgSalaryPersonalPerMonth / WORKS_HOUR_PER_MONTH);
};
