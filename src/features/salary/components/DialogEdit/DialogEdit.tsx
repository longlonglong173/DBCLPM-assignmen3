import React, { FC, memo } from "react";

import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  FormLabel,
} from "@material-ui/core";
import { Formik } from "formik";

import FormDialog from "components/FormDialog/FormDialog";
import FormikTextField from "components/FormElements/FormikTextField/FormikTextField";
import { useAppDispatch, useAppSelector } from "redux/store";

import { updateSalaryByIndex } from "../../redux/salary.slice";

interface DialogEdit {
  isOpen: boolean;
  salaryIndex: number;
  onOK: () => void;
  onCancel: () => void;
}

const DialogEdit: FC<DialogEdit> = ({
  isOpen = false,
  salaryIndex,
  onCancel,
  onOK,
}) => {
  const { list } = useAppSelector(state => state.salary);
  const dispatch = useAppDispatch();

  return (
    <FormDialog isOpen={isOpen} title="Chỉnh sửa">
      <Formik
        initialValues={list[salaryIndex]}
        onSubmit={value => {
          dispatch(
            updateSalaryByIndex({
              index: salaryIndex,
              data: value,
            })
          );
          onOK();
        }}
      >
        {({ handleSubmit }) => (
          <DialogContent>
            <Box display="flex" flexWrap="wrap">
              <Box flex={1} padding={1} minWidth={200}>
                <Box mb={1}>
                  <FormLabel htmlFor="salaryPerMonth">
                    Mức lương/tháng (đồng):
                  </FormLabel>
                </Box>
                <FormikTextField
                  id="salaryPerMonth"
                  name="salaryPerMonth"
                  fullWidth
                />
              </Box>
              <Box flex={1} padding={1} minWidth={200}>
                <Box mb={1}>
                  <FormLabel htmlFor="amount">Số lượng cán bộ:</FormLabel>
                </Box>
                <FormikTextField id="amount" name="amount" fullWidth />
              </Box>
            </Box>
            <DialogActions>
              <Button
                variant="text"
                size="large"
                color="primary"
                onClick={() => {
                  onCancel();
                }}
              >
                Hủy
              </Button>
              <Button
                variant="contained"
                size="large"
                color="primary"
                // type="submit"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Cập nhật
              </Button>
            </DialogActions>
          </DialogContent>
        )}
      </Formik>
    </FormDialog>
  );
};

export default memo(DialogEdit);
