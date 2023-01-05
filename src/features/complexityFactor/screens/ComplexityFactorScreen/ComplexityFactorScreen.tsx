/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { FC, memo, useState } from "react";

import {
  Box,
  IconButton,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import ConfirmDialog from "components/ConfirmDialog";
import { useGetTCF, useGetTFW } from "hooks/use-custom-getter";
import { useAppDispatch, useAppSelector } from "redux/store";

import CustomMuiTypography from "styles/themes/components/CustomMuiTypography";

import {
  addNewComplexityFactor,
  editComplexityFactorByIndex,
  removeComplexityFactorByIndex,
} from "../../redux/complexity-factor.slice";
import { ComplexityFactorType } from "../../types/complexity-factor.types";
import { useStyles } from "./ComplexityFactorScreen.styles";

const NEW_DATA_DEF: ComplexityFactorType = {
  name: "",
  ratingValue: 0,
  weight: 0,
};

const SalaryScreen: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { list } = useAppSelector(state => state.complexityFactor);

  const [isAddnewRow, setIsAddNewRow] = useState<boolean>(false);
  const [isShowAddRow, setIsShowAddRow] = useState<boolean>(false);
  const [newData, setNewData] = useState<ComplexityFactorType>(NEW_DATA_DEF);
  const [indexDelete, setIndexDelete] = useState<number>(-1);

  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] =
    useState<boolean>(false);

  const handleClearInput = () => {
    setIsAddNewRow(false);
    setIsShowAddRow(false);
    setNewData(NEW_DATA_DEF);
  };

  const TFW = useGetTFW();

  const TCF = useGetTCF();

  return (
    <>
      <Box my={3}>
        <ConfirmDialog
          open={isOpenDeleteConfirm}
          onClose={() => {
            setIsOpenDeleteConfirm(false);
            setIndexDelete(-1);
          }}
          onOk={() => {
            dispatch(removeComplexityFactorByIndex(indexDelete));
            setIsOpenDeleteConfirm(false);
            setIndexDelete(-1);
          }}
          title="Xóa hệ số kĩ thuật - công nghệ"
          note={`Bạn có muốn xóa hàng ${indexDelete + 1} không?`}
        />
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
                    Các hệ số
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography
                    fontSize={20}
                    fontWeight="fontWeightBold"
                  >
                    Trọng số
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography
                    fontSize={20}
                    fontWeight="fontWeightBold"
                  >
                    Giá trị xếp hạng
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography
                    fontSize={20}
                    fontWeight="fontWeightBold"
                  >
                    Kết quả
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
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell align="center">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    I
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Hệ số KT-CN (TFW)
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={2} />
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    {TFW}
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={2} />
              </TableRow>
              {list.map((item, index) => (
                <TableRow key={`row-${index}`}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell>
                    <Input
                      fullWidth
                      id={`row-${index}-name`}
                      value={item.name}
                      multiline
                      onChange={e => {
                        dispatch(
                          editComplexityFactorByIndex({
                            index,
                            data: {
                              ...item,
                              name: e.target.value,
                            },
                          })
                        );
                      }}
                      onBlur={e => {
                        dispatch(
                          editComplexityFactorByIndex({
                            index,
                            data: {
                              ...item,
                              name: e.target.value.trim(),
                            },
                          })
                        );
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      fullWidth
                      id={`row-${index}-weight`}
                      value={item.weight}
                      type="number"
                      onChange={e => {
                        dispatch(
                          editComplexityFactorByIndex({
                            index,
                            data: {
                              ...item,
                              weight: +e.target.value,
                            },
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
                      id={`row-${index}-ratingValue`}
                      value={item.ratingValue}
                      type="number"
                      onChange={e => {
                        dispatch(
                          editComplexityFactorByIndex({
                            index,
                            data: {
                              ...item,
                              ratingValue: +e.target.value,
                            },
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
                  <TableCell>{item.weight * item.ratingValue}</TableCell>
                  <TableCell>
                    <Input
                      fullWidth
                      id={`row-${index}-note`}
                      value={item.note}
                      multiline
                      placeholder="Nhập ghi chú"
                      onChange={e => {
                        dispatch(
                          editComplexityFactorByIndex({
                            index,
                            data: {
                              ...item,
                              note: e.target.value,
                            },
                          })
                        );
                      }}
                      onBlur={e => {
                        dispatch(
                          editComplexityFactorByIndex({
                            index,
                            data: {
                              ...item,
                              note: e.target.value.trim(),
                            },
                          })
                        );
                      }}
                    />
                  </TableCell>
                  <TableCell align="center" style={{ padding: "4px" }}>
                    <IconButton
                      onClick={() => {
                        setIsOpenDeleteConfirm(true);
                        setIndexDelete(index);
                      }}
                    >
                      <DeleteForeverIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                {isAddnewRow ? (
                  <>
                    <TableCell align="center">{list.length + 1}</TableCell>
                    <TableCell>
                      <Input
                        fullWidth
                        value={newData.name}
                        onChange={e => {
                          setNewData({ ...newData, name: e.target.value });
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        fullWidth
                        value={newData.weight}
                        type="number"
                        onChange={e => {
                          setNewData({ ...newData, weight: +e.target.value });
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
                        value={newData.ratingValue}
                        type="number"
                        onChange={e => {
                          setNewData({
                            ...newData,
                            ratingValue: +e.target.value,
                          });
                        }}
                        onFocus={e => {
                          if (e.target.value === "0") {
                            e.target.select();
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      {newData.weight * newData.ratingValue}
                    </TableCell>

                    <TableCell
                      className={classes.cellAction}
                      style={{ position: "relative" }}
                      colSpan={2}
                    >
                      <Box
                        display="flex"
                        position="absolute"
                        top="50%"
                        right="8px"
                        style={{ transform: "translateY(-50%)" }}
                      >
                        <IconButton
                          onClick={() => {
                            handleClearInput();
                            dispatch(addNewComplexityFactor(newData));
                          }}
                        >
                          <CheckCircleIcon color="primary" />
                        </IconButton>
                        <Box ml={1}>
                          <IconButton
                            onClick={() => {
                              handleClearInput();
                            }}
                          >
                            <DeleteForeverIcon color="error" />
                          </IconButton>
                        </Box>
                      </Box>
                    </TableCell>
                  </>
                ) : (
                  <TableCell
                    className={classes.addRowLine}
                    style={{ height: isShowAddRow ? "8px" : "6px" }}
                    colSpan={6}
                    onMouseOver={() => {
                      setIsShowAddRow(true);
                    }}
                    onMouseLeave={() => {
                      setIsShowAddRow(false);
                    }}
                    onClick={() => {
                      setIsAddNewRow(true);
                    }}
                    title="Thêm mới"
                  >
                    <IconButton
                      className={classes.addIcon}
                      style={{
                        opacity: isShowAddRow ? 1 : 0,
                        transition: "all linear 200ms",
                      }}
                      size="small"
                    >
                      <AddCircleOutlineIcon color="action" />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
              <TableRow>
                <TableCell align="center">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    II
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Hệ số phức tạp về KT-CN (TCF)
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={4}>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    {`= 0,6 + (0,01 x TFW) =  0,6 + (0,01 x ${TFW}) = ${TCF}`}
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
