import React, { FC, memo } from "react";

import {
  Box,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { useGetTAW } from "hooks/use-custom-getter";
import { useAppDispatch, useAppSelector } from "redux/store";

import { setActorStoreValue } from "../../redux/actor.slice";

const SalaryScreen: FC = () => {
  const dispatch = useAppDispatch();
  const { simple, medium, complex } = useAppSelector(state => state.actor);

  const TAW = useGetTAW();

  return (
    <>
      <Box mt={3}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">STT</TableCell>
                <TableCell>Loại Actor</TableCell>
                <TableCell>Mô tả</TableCell>
                <TableCell>Số tác nhân</TableCell>
                <TableCell>Điểm của từng loại tác nhân</TableCell>
                <TableCell>Ghi chú</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell>Đơn giản</TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="simple-desc"
                    value={simple.desc}
                    multiline
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "simple",
                          data: { ...simple, desc: e.target.value },
                        })
                      );
                    }}
                    onBlur={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "simple",
                          data: { ...simple, desc: e.target.value.trim() },
                        })
                      );
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="simple-amount"
                    value={simple.amount}
                    type="number"
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "simple",
                          data: { ...simple, amount: +e.target.value },
                        })
                      );
                    }}
                    onFocus={e => {
                      if (e.target.value === "0") {
                        e.target.select();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="simple-point"
                    value={simple.point}
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "simple",
                          data: { ...simple, point: +e.target.value },
                        })
                      );
                    }}
                    onFocus={e => {
                      if (e.target.value === "0") {
                        e.target.select();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="simple-note"
                    value={simple.note}
                    multiline
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "simple",
                          data: { ...simple, note: e.target.value },
                        })
                      );
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">2</TableCell>
                <TableCell>Trung bình</TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="medium-desc"
                    value={medium.desc}
                    multiline
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "medium",
                          data: { ...medium, desc: e.target.value },
                        })
                      );
                    }}
                    onBlur={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "simple",
                          data: { ...simple, desc: e.target.value.trim() },
                        })
                      );
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="medium-amount"
                    value={medium.amount}
                    type="number"
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "medium",
                          data: { ...medium, amount: +e.target.value },
                        })
                      );
                    }}
                    onFocus={e => {
                      if (e.target.value === "0") {
                        e.target.select();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="medium-point"
                    value={medium.point}
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "medium",
                          data: { ...medium, point: +e.target.value },
                        })
                      );
                    }}
                    onFocus={e => {
                      if (e.target.value === "0") {
                        e.target.select();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="medium-note"
                    value={medium.note}
                    multiline
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "medium",
                          data: { ...medium, note: e.target.value },
                        })
                      );
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">3</TableCell>
                <TableCell>Phức tạp</TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="complex-desc"
                    value={complex.desc}
                    multiline
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "complex",
                          data: { ...complex, desc: e.target.value },
                        })
                      );
                    }}
                    onBlur={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "simple",
                          data: { ...simple, desc: e.target.value.trim() },
                        })
                      );
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="complex-amount"
                    value={complex.amount}
                    type="number"
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "complex",
                          data: { ...complex, amount: +e.target.value },
                        })
                      );
                    }}
                    onFocus={e => {
                      if (e.target.value === "0") {
                        e.target.select();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="complex-point"
                    value={complex.point}
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "complex",
                          data: { ...complex, point: +e.target.value },
                        })
                      );
                    }}
                    onFocus={e => {
                      if (e.target.value === "0") {
                        e.target.select();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    fullWidth
                    id="complex-note"
                    value={complex.note}
                    multiline
                    onChange={e => {
                      dispatch(
                        setActorStoreValue({
                          type: "complex",
                          data: { ...complex, note: e.target.value },
                        })
                      );
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>Cộng (1+2+3)</TableCell>
                <TableCell>TAW</TableCell>
                <TableCell />
                <TableCell>{TAW}</TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default memo(SalaryScreen);
