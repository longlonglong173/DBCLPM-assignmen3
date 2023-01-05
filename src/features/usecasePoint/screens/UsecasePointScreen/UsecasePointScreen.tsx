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
import { useGetTBF } from "hooks/use-custom-getter";
import { useAppDispatch, useAppSelector } from "redux/store";

import CustomMuiTypography from "styles/themes/components/CustomMuiTypography";

import { VN_NAME } from "../../constants/usecase-point.paths";
import {
  addNewUsecasePoint,
  editUsecaseNameByIndex,
  editUsecasePointByIndex,
  removeUsecasePointByIndex,
} from "../../redux/usecase-point.slice";
import {
  UsecasePointType,
  UsecasePointTypeName,
} from "../../types/usecase-point.types";
import { useStyles } from "./UsecasePointScreen.styles";

const LevelArray: UsecasePointTypeName[] = ["simple", "medium", "complex"];
const NEW_DATA_DEF: UsecasePointType = {
  name: "",
  data: {
    simple: {
      amount: 0,
      point: 0,
    },
    medium: {
      amount: 0,
      point: 0,
    },
    complex: {
      amount: 0,
      point: 0,
    },
  },
};

const SalaryScreen: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { list } = useAppSelector(state => state.usecasePoint);

  const [isAddnewRow, setIsAddNewRow] = useState<boolean>(false);
  const [isShowAddRow, setIsShowAddRow] = useState<boolean>(false);
  const [newData, setNewData] = useState<UsecasePointType>(NEW_DATA_DEF);
  const [deleteIndex, setDeleteIndex] = useState<number>(-1);

  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] =
    useState<boolean>(false);

  const handleClearInput = () => {
    setIsAddNewRow(false);
    setIsShowAddRow(false);
    setNewData(NEW_DATA_DEF);
  };

  const TBF = useGetTBF();

  return (
    <>
      <Box my={3}>
        <ConfirmDialog
          open={isOpenDeleteConfirm}
          onClose={() => {
            setIsOpenDeleteConfirm(false);
            setDeleteIndex(-1);
          }}
          onOk={() => {
            dispatch(removeUsecasePointByIndex(deleteIndex));
            setIsOpenDeleteConfirm(false);
            setDeleteIndex(-1);
          }}
          title="Xóa hệ số kĩ thuật - công nghệ"
          note={`Bạn có muốn xóa hàng ${deleteIndex + 1} không?`}
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
                    Loại
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography
                    fontSize={20}
                    fontWeight="fontWeightBold"
                  >
                    Số trường hợp sử dụng
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography
                    fontSize={20}
                    fontWeight="fontWeightBold"
                  >
                    Điểm của từng loại trường hợp sử dụng
                  </CustomMuiTypography>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              {list.map((item, index) => (
                <React.Fragment key={`item-${index}`}>
                  <TableRow>
                    <TableCell align="center">
                      <CustomMuiTypography fontWeight="fontWeightBold">
                        {index + 1}
                      </CustomMuiTypography>
                    </TableCell>
                    <TableCell>
                      <Input
                        fullWidth
                        value={item.name}
                        multiline
                        onChange={e => {
                          dispatch(
                            editUsecaseNameByIndex({
                              index,
                              name: e.target.value,
                            })
                          );
                        }}
                        onBlur={e => {
                          dispatch(
                            editUsecaseNameByIndex({
                              index,
                              name: e.target.value.trim(),
                            })
                          );
                        }}
                        style={{ fontWeight: "bold" }}
                      />
                    </TableCell>
                    <TableCell>
                      <CustomMuiTypography fontWeight="fontWeightBold">
                        {item.data.simple.amount +
                          item.data.medium.amount +
                          item.data.complex.amount}
                      </CustomMuiTypography>
                    </TableCell>
                    <TableCell>
                      <Box className={classes.lastCell}>
                        <CustomMuiTypography fontWeight="fontWeightBold">
                          {item.data.simple.point +
                            item.data.medium.point +
                            item.data.complex.point}
                        </CustomMuiTypography>
                      </Box>
                    </TableCell>
                    <TableCell align="center" style={{ padding: "4px" }}>
                      <IconButton
                        onClick={() => {
                          setIsOpenDeleteConfirm(true);
                          setDeleteIndex(index);
                        }}
                      >
                        <DeleteForeverIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  {LevelArray.map(name => (
                    <TableRow key={name}>
                      <TableCell />
                      <TableCell>{VN_NAME[name]}</TableCell>
                      <TableCell>
                        <Input
                          fullWidth
                          value={item.data[name].amount}
                          type="number"
                          onChange={e => {
                            dispatch(
                              editUsecasePointByIndex({
                                index,
                                type: name,
                                data: {
                                  ...item.data[name],
                                  amount: +e.target.value,
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
                      <TableCell className={classes.lastCell}>
                        <Box className={classes.lastCell}>
                          <Input
                            fullWidth
                            value={item.data[name].point}
                            type="number"
                            onChange={e => {
                              dispatch(
                                editUsecasePointByIndex({
                                  index,
                                  type: name,
                                  data: {
                                    ...item.data[name],
                                    point: +e.target.value,
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
                        </Box>
                      </TableCell>
                      <TableCell />
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
              {isAddnewRow ? (
                <>
                  <TableRow>
                    <TableCell align="center">{list.length + 1}</TableCell>
                    <TableCell>
                      <Input
                        fullWidth
                        value={newData.name}
                        multiline
                        onChange={e => {
                          setNewData({ ...newData, name: e.target.value });
                        }}
                        onBlur={e => {
                          setNewData({
                            ...newData,
                            name: e.target.value.trim(),
                          });
                        }}
                        placeholder="Nhập tên usecase"
                        style={{ fontWeight: "bold" }}
                      />
                    </TableCell>
                    <TableCell>
                      <CustomMuiTypography fontWeight="fontWeightBold">
                        {newData.data.simple.amount +
                          newData.data.medium.amount +
                          newData.data.complex.amount}
                      </CustomMuiTypography>
                    </TableCell>
                    <TableCell>
                      <CustomMuiTypography fontWeight="fontWeightBold">
                        {newData.data.simple.point +
                          newData.data.medium.point +
                          newData.data.complex.point}
                      </CustomMuiTypography>
                    </TableCell>
                    <TableCell
                      className={classes.cellAction}
                      style={{ position: "relative" }}
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
                            dispatch(addNewUsecasePoint(newData));
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
                  </TableRow>
                  {LevelArray.map(name => (
                    <TableRow key={name}>
                      <TableCell />
                      <TableCell>{VN_NAME[name]}</TableCell>
                      <TableCell>
                        <Input
                          fullWidth
                          value={newData.data[name].amount}
                          type="number"
                          onChange={e => {
                            const data = { ...newData };
                            data.data[name].amount = +e.target.value;
                            setNewData(data);
                          }}
                          onFocus={e => {
                            if (e.target.value === "0") {
                              e.target.select();
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell className={classes.lastCell}>
                        <Box className={classes.lastCell}>
                          <Input
                            fullWidth
                            value={newData.data[name].point}
                            type="number"
                            onChange={e => {
                              const data = { ...newData };
                              data.data[name].point = +e.target.value;
                              setNewData(data);
                            }}
                            onFocus={e => {
                              if (e.target.value === "0") {
                                e.target.select();
                              }
                            }}
                          />
                        </Box>
                      </TableCell>
                      <TableCell />
                    </TableRow>
                  ))}
                </>
              ) : (
                <TableRow>
                  <TableCell
                    className={classes.addRowLine}
                    style={{ height: isShowAddRow ? "8px" : "6px" }}
                    colSpan={5}
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
                </TableRow>
              )}
              <TableRow>
                <TableCell />
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Cộng{" "}
                    {list.map((_, index) =>
                      index === 0 ? ` ${index + 1}` : ` + ${index + 1}`
                    )}
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    TBF
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    {TBF}
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
