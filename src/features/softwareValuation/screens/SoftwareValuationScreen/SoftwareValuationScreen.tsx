/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { FC, memo, useMemo } from "react";

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import {
  useGetEF,
  useGetTAW,
  useGetTBF,
  useGetTCF,
} from "hooks/use-custom-getter";
import { useGetAvgPersonPerHour } from "hooks/use-salary";
import { useAppSelector } from "redux/store";

import CustomMuiTypography from "styles/themes/components/CustomMuiTypography";

import { formatNumber } from "../../../salary/helpers/salary.helper";

const SalaryScreen: FC = () => {
  const { P } = useAppSelector(state => state.laborTime);

  const TAW = useGetTAW();
  const TBF = useGetTBF();
  const UUCP = useMemo(() => TAW + TBF, [TAW, TBF]);
  const TCF = useGetTCF();
  const EF = useGetEF();
  const AUCP = useMemo(() => +(UUCP * TCF * EF).toFixed(4), [UUCP, TCF, EF]);
  const E = useMemo(() => +((10 * AUCP) / 6).toFixed(4), [AUCP]);
  const H = useGetAvgPersonPerHour();
  const G = useMemo(() => formatNumber(Math.round(1.4 * E * P * H)), [E, P, H]);

  return (
    <>
      <Box my={3}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <CustomMuiTypography
                    fontSize={20}
                    fontWeight="fontWeightBold"
                  >
                    STT
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography
                    fontSize={20}
                    fontWeight="fontWeightBold"
                  >
                    Hạng mục
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography
                    fontSize={20}
                    fontWeight="fontWeightBold"
                  >
                    Diễn giải
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography
                    fontSize={20}
                    fontWeight="fontWeightBold"
                  >
                    Giá trị
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography
                    fontSize={20}
                    fontWeight="fontWeightBold"
                  >
                    Ghi chú
                  </CustomMuiTypography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    I
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={4}>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Tính điểm trường hợp sử dụng
                    <br />
                    (Use-case)
                  </CustomMuiTypography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">1</TableCell>
                <TableCell>Điểm Actor (TAW)</TableCell>
                <TableCell />
                <TableCell align="right">{TAW}</TableCell>
                {/* <TableCell /> */}
              </TableRow>
              <TableRow>
                <TableCell align="right">2</TableCell>
                <TableCell>Điểm Use-case (TBF)</TableCell>
                <TableCell />
                <TableCell align="right">{TBF}</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell align="right">3</TableCell>
                <TableCell>Tính điểm UUCP</TableCell>
                <TableCell>UUCP = TAW + TBF</TableCell>
                <TableCell align="right">{UUCP}</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell align="right">4</TableCell>
                <TableCell>Hệ số phức tạp về KT-CN (TCF)</TableCell>
                <TableCell>TCF = 0,6 + (0,01 x TFW)</TableCell>
                <TableCell align="right">{TCF}</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell align="right">5</TableCell>
                <TableCell>Hệ số phức tạp về môi trường (EF)</TableCell>
                <TableCell> EF = 1,4 + (-0,003 x EFW)</TableCell>
                <TableCell align="right">{EF}</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell align="right">6</TableCell>
                <TableCell>Tính điểm AUCP</TableCell>
                <TableCell>AUCP = UUCP x TCF x EF</TableCell>
                <TableCell align="right">{AUCP}</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    II
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Nội suy thời gian lao động (P)
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    P : người/giờ/AUCP
                  </CustomMuiTypography>
                </TableCell>
                <TableCell align="right">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    {P}
                  </CustomMuiTypography>
                </TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    III
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Giá trị nỗ lực thực tế (E)
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    E = 10/6 x AUCP
                  </CustomMuiTypography>
                </TableCell>
                <TableCell align="right">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    {E}
                  </CustomMuiTypography>
                </TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    IV
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Mức lương lao động bình quân (H)
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    H: người/giờ
                  </CustomMuiTypography>
                </TableCell>
                <TableCell align="right">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    {H}
                  </CustomMuiTypography>
                </TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    V
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Giá trị phần mềm nội bộ (G)
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    G = 1,4 x E x P x H
                  </CustomMuiTypography>
                </TableCell>
                <TableCell align="right">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    {G}
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    đồng
                  </CustomMuiTypography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default memo(SalaryScreen);
