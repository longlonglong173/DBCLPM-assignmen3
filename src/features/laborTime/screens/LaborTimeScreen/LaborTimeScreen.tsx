/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { FC, memo, useState } from "react";

import {
  Box,
  IconButton,
  Input,
  MenuItem,
  Paper,
  Select,
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
import { useGetEF, useGetEFW, useGetES } from "hooks/use-custom-getter";
import { useAppDispatch, useAppSelector } from "redux/store";

import CustomMuiTypography from "styles/themes/components/CustomMuiTypography";

import {
  addNewLaborTime,
  editLaborTimeByIndex,
  editP,
  removeLaborTimeByIndex,
} from "../../redux/labor-time.slice";
import { LaborTimeType, LaborTimeTypeName } from "../../types/labor-time.types";
import { useStyles } from "./LaborTimeScreen.styles";

type DeleteInfoType = {
  type: LaborTimeTypeName;
  index: number;
};

const DELETE_INFO_DEF: DeleteInfoType = {
  type: "member",
  index: -1,
};

const NEW_DATA_DEF: LaborTimeType = {
  name: "",
  ratingValue: 0,
  weight: 0,
  experienceStability: 0,
  type: "member",
};

const SalaryScreen: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    data: { member, project },
    P,
  } = useAppSelector(state => state.laborTime);

  const [isAddnewRow, setIsAddNewRow] = useState<boolean>(false);
  const [isShowAddRow, setIsShowAddRow] = useState<boolean>(false);
  const [newData, setNewData] = useState<LaborTimeType>(NEW_DATA_DEF);
  const [deleteInfo, setDeleteInfo] = useState<DeleteInfoType>(DELETE_INFO_DEF);

  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] =
    useState<boolean>(false);

  const handleClearInput = () => {
    setIsAddNewRow(false);
    setIsShowAddRow(false);
    setNewData(NEW_DATA_DEF);
  };

  const EFW = useGetEFW();

  const EF = useGetEF();

  const ES = useGetES();

  return (
    <>
      <Box my={3}>
        <ConfirmDialog
          open={isOpenDeleteConfirm}
          onClose={() => {
            setIsOpenDeleteConfirm(false);
            setDeleteInfo(DELETE_INFO_DEF);
          }}
          onOk={() => {
            dispatch(removeLaborTimeByIndex(deleteInfo));
            setIsOpenDeleteConfirm(false);
            setDeleteInfo(DELETE_INFO_DEF);
          }}
          title="Xóa hệ số kĩ thuật - công nghệ"
          note={`Bạn có muốn xóa hàng ${deleteInfo.index + 1} không?`}
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
                    Các hệ số tác động môi trường
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
                    Độ ổn định kinh nghiệm
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
                    Hệ số tác động môi trường và nhóm làm việc (EFW)
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={2} />
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    {EFW}
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={2} />
              </TableRow>
              {/* for member */}
              <TableRow>
                <TableCell />
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Đánh giá cho từng thành viên
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={5} />
              </TableRow>
              {member.map((item, index) => (
                <TableRow key={`member-row-${index}`}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell>
                    <Input
                      fullWidth
                      id={`member-row-${index}-name`}
                      value={item.name}
                      multiline
                      onChange={e => {
                        dispatch(
                          editLaborTimeByIndex({
                            type: "member",
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
                          editLaborTimeByIndex({
                            type: "member",
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
                      id={`member-row-${index}-weight`}
                      value={item.weight}
                      type="number"
                      onChange={e => {
                        dispatch(
                          editLaborTimeByIndex({
                            type: "member",
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
                      id={`member-row-${index}-ratingValue`}
                      value={item.ratingValue}
                      type="number"
                      onChange={e => {
                        dispatch(
                          editLaborTimeByIndex({
                            type: "member",
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
                      id={`member-row-${index}-experienceStability`}
                      value={item.experienceStability}
                      type="number"
                      onChange={e => {
                        dispatch(
                          editLaborTimeByIndex({
                            type: "member",
                            index,
                            data: {
                              ...item,
                              experienceStability: +e.target.value,
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
                  <TableCell align="center" style={{ padding: "4px" }}>
                    <IconButton
                      onClick={() => {
                        setIsOpenDeleteConfirm(true);
                        setDeleteInfo({
                          type: "member",
                          index,
                        });
                      }}
                    >
                      <DeleteForeverIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {/* project */}
              <TableRow>
                <TableCell />
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Đánh giá chung cho Dự án
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={5} />
              </TableRow>
              {project.map((item, index) => (
                <TableRow key={`project-row-${index}`}>
                  <TableCell align="center">
                    {member.length + index + 1}
                  </TableCell>
                  <TableCell>
                    <Input
                      fullWidth
                      id={`project-row-${index}-name`}
                      value={item.name}
                      multiline
                      onChange={e => {
                        dispatch(
                          editLaborTimeByIndex({
                            type: "project",
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
                          editLaborTimeByIndex({
                            type: "project",
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
                      id={`project-row-${index}-weight`}
                      value={item.weight}
                      type="number"
                      onChange={e => {
                        dispatch(
                          editLaborTimeByIndex({
                            type: "project",
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
                      id={`project-row-${index}-ratingValue`}
                      value={item.ratingValue}
                      type="number"
                      onChange={e => {
                        dispatch(
                          editLaborTimeByIndex({
                            type: "project",
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
                      id={`project-row-${index}-experienceStability`}
                      value={item.experienceStability}
                      type="number"
                      onChange={e => {
                        dispatch(
                          editLaborTimeByIndex({
                            type: "project",
                            index,
                            data: {
                              ...item,
                              experienceStability: +e.target.value,
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
                  <TableCell align="center" style={{ padding: "4px" }}>
                    <IconButton
                      onClick={() => {
                        setIsOpenDeleteConfirm(true);
                        setDeleteInfo({
                          type: "project",
                          index,
                        });
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
                    <TableCell align="center">
                      <Select
                        value={newData.type}
                        defaultValue="member"
                        onChange={e => {
                          setNewData({
                            ...newData,
                            type: e.target.value as LaborTimeTypeName,
                          });
                        }}
                      >
                        <MenuItem value="member">Thành viên</MenuItem>
                        <MenuItem value="project">Dự án</MenuItem>
                      </Select>
                    </TableCell>
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
                    <TableCell>
                      <Input
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
                        style={{
                          width: "calc(100% - 30px)",
                        }}
                      />
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
                            dispatch(
                              addNewLaborTime({ type: "member", data: newData })
                            );
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
                    colSpan={7}
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
                    Hệ số phức tạp về môi trường (EF)
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={2} />
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    <CustomMuiTypography fontWeight="fontWeightBold">
                      {EF}
                    </CustomMuiTypography>
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={2} />
              </TableRow>
              <TableRow>
                <TableCell align="center">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    III
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Độ ổn định kinh nghiệm (ES)
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={3} />
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    <CustomMuiTypography fontWeight="fontWeightBold">
                      {ES}
                    </CustomMuiTypography>
                  </CustomMuiTypography>
                </TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell align="center">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    IV
                  </CustomMuiTypography>
                </TableCell>
                <TableCell>
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Nội suy thời gian lao động (P)
                  </CustomMuiTypography>
                </TableCell>
                <TableCell colSpan={4} align="center">
                  <Input
                    fullWidth
                    id="coefficient-P"
                    value={P}
                    type="number"
                    onChange={e => {
                      dispatch(editP(+e.target.value));
                    }}
                    onFocus={e => {
                      if (e.target.value === "0") {
                        e.target.select();
                      }
                    }}
                    className={classes.inputCenter}
                  />
                </TableCell>
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
