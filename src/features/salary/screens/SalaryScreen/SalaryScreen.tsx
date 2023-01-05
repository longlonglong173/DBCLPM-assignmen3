/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { FC, memo, useState } from "react";

import {
  Box,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import ConfirmDialog from "components/ConfirmDialog";
import {
  useGetAvgPersonPerHour,
  useGetAvgSalaryPersonalPerMonth,
  useGetTotalSalaryPerMonth,
} from "hooks/use-salary";
import { useAppDispatch, useAppSelector } from "redux/store";

import CustomMuiTypography from "styles/themes/components/CustomMuiTypography";

import DialogEdit from "../../components/DialogEdit/DialogEdit";
import { formatNumber } from "../../helpers/salary.helper";
import { addNewSalary, removeSalaryByIndex } from "../../redux/salary.slice";
import { useStyles } from "./SalaryScreen.styles";

const SalaryScreen: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { list } = useAppSelector(state => state.salary);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isShowAddRow, setIsShowAddRow] = useState<boolean>(false);
  const [isAddnewRow, setIsAddNewRow] = useState<boolean>(false);
  const [newSalaryPerMonth, setNewSalaryPerMonth] = useState<number>(0);
  const [newAmount, setNewAmount] = useState<number>(0);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);

  const [rowEditIndex, setRowEditIndex] = useState<number>(-1);

  const totalSalaryPerMonth = useGetTotalSalaryPerMonth();

  const avgSalaryPersonalPerMonth = useGetAvgSalaryPersonalPerMonth();

  const avgPersonPerHour = useGetAvgPersonPerHour();

  const handleShowRowPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClearInput = () => {
    setIsAddNewRow(false);
    setIsShowAddRow(false);
    setNewSalaryPerMonth(0);
    setNewAmount(0);
  };

  return (
    <>
      <Box mt={3}>
        <ConfirmDialog
          title="Bạn có muốn xóa hàng tính lương này?"
          note={`Xóa dữ liệu ở hàng có STT là ${
            rowEditIndex ? rowEditIndex + 1 : 1
          }`}
          onClose={() => {
            setIsOpenDelete(false);
            setRowEditIndex(-1);
          }}
          onOk={() => {
            dispatch(removeSalaryByIndex(rowEditIndex));

            setIsOpenDelete(false);
            setRowEditIndex(-1);
          }}
          okText="Xóa"
          cancelText="Hủy"
          vertical
          open={isOpenDelete}
        />
        <DialogEdit
          isOpen={isOpenEdit}
          salaryIndex={rowEditIndex}
          onOK={() => {
            setIsOpenEdit(false);
          }}
          onCancel={() => {
            setIsOpenEdit(false);
          }}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">STT</TableCell>
                <TableCell>Mức lương/tháng (đồng)</TableCell>
                <TableCell>Số lượng cán bộ</TableCell>
                <TableCell>Tổng (đồng)</TableCell>
                <TableCell className={classes.cellAction} />
              </TableRow>
            </TableHead>
            <TableBody>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={!!anchorEl}
                onClose={() => {
                  setAnchorEl(null);
                  setRowEditIndex(-1);
                }}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                MenuListProps={{
                  style: {
                    minWidth: 180,
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setIsOpenEdit(true);
                  }}
                >
                  Chỉnh sửa
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setIsOpenDelete(true);
                  }}
                >
                  Xóa
                </MenuItem>
              </Menu>

              {list.map(({ salaryPerMonth, amount }, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <TableRow key={`row-${index}`}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="right">
                    {formatNumber(salaryPerMonth)}
                  </TableCell>
                  <TableCell align="right">{formatNumber(amount)}</TableCell>
                  <TableCell align="right">
                    {formatNumber(salaryPerMonth * amount)}
                  </TableCell>
                  <TableCell align="center" className={classes.cellAction}>
                    <IconButton
                      size="small"
                      onClick={event => {
                        handleShowRowPopover(event);
                        setRowEditIndex(index);
                      }}
                    >
                      <MoreVert color="action" />
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
                        value={newSalaryPerMonth}
                        type="number"
                        onChange={e => {
                          setNewSalaryPerMonth(Number(e.target.value));
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        fullWidth
                        value={newAmount}
                        type="number"
                        onChange={e => {
                          setNewAmount(Number(e.target.value));
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      {newAmount * newSalaryPerMonth}
                    </TableCell>

                    <TableCell
                      className={classes.cellAction}
                      style={{ position: "relative" }}
                    >
                      <Box
                        display="flex"
                        position="absolute"
                        top="50%"
                        left="50%"
                        style={{ transform: "translate(-50%, -50%)" }}
                      >
                        <IconButton
                          onClick={() => {
                            handleClearInput();
                            dispatch(
                              addNewSalary({
                                salaryPerMonth: newSalaryPerMonth,
                                amount: newAmount,
                              })
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
                )}
              </TableRow>

              <TableRow>
                <TableCell colSpan={3} align="right">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Tổng chi lương/tháng
                  </CustomMuiTypography>
                </TableCell>
                <TableCell align="right">
                  {formatNumber(totalSalaryPerMonth)}
                </TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} align="right">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Mức lương bình quân/người/tháng
                  </CustomMuiTypography>
                </TableCell>
                <TableCell align="right">
                  {formatNumber(avgSalaryPersonalPerMonth)}
                </TableCell>
                <TableCell />
              </TableRow>

              <TableRow>
                <TableCell colSpan={3} align="right">
                  <CustomMuiTypography fontWeight="fontWeightBold">
                    Mức bình quân 1 người/1 giờ
                  </CustomMuiTypography>
                </TableCell>
                <TableCell align="right">
                  {formatNumber(avgPersonPerHour)}
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
