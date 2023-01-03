import React, { FC, memo } from "react";

import { Dialog, DialogTitle } from "@material-ui/core";

import CustomMuiTypography from "styles/themes/components/CustomMuiTypography";

import { useStyles } from "./FormDialog.styles";

interface FormDialogProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
}

const FormDialog: FC<FormDialogProps> = ({ isOpen, title, children }) => {
  const classes = useStyles();
  return (
    <Dialog
      open={isOpen}
      maxWidth="md"
      scroll="paper"
      className={classes.dialogEdit}
    >
      <DialogTitle disableTypography>
        <CustomMuiTypography
          variant="h5"
          fontSize={20}
          fontWeight="fontWeightBold"
        >
          {title}
        </CustomMuiTypography>
      </DialogTitle>

      {children}
    </Dialog>
  );
};

export default memo(FormDialog);
