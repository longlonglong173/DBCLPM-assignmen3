import React, { memo } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles,
  Box,
} from "@material-ui/core";
import clsx from "clsx";

import { FontFamilyWithTypes } from "styles/themes/theme-constants";

export const useStyles = makeStyles(theme => ({
  vertical: {
    flexDirection: "column-reverse",
    alignItems: "stretch",
    "& button": {
      margin: "0 !important",
    },
  },
  title: {
    fontFamily: FontFamilyWithTypes.RobotoSlab,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 20,
    lineHeight: 1.6,
    color: theme.palette.text.primary,
  },
  contentText: {
    margin: 0,
  },
  actions: {
    padding: theme.spacing(2, 3),
  },
}));

type ConfirmDialogProps = {
  onClose: () => void;
  open: boolean;
  onOk: (() => void) | (() => Promise<void>);
  title: string;
  note: string;
  vertical?: boolean;
  okText?: string;
  cancelText?: string;
  disabled?: boolean;
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  onClose,
  open,
  onOk,
  title,
  note,
  vertical,
  okText = "OK",
  cancelText = "CANCEL",
  disabled,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        elevation: 24,
      }}
    >
      <DialogTitle disableTypography className={classes.title}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          variant="body1"
          color="textSecondary"
          className={classes.contentText}
        >
          {note}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        className={clsx(classes.actions, vertical && classes.vertical)}
      >
        <Button onClick={onClose} disabled={disabled} color="primary">
          {cancelText}
        </Button>
        <Box padding={0.5} />
        <Button
          onClick={onOk}
          disabled={disabled}
          variant="contained"
          color="primary"
        >
          {okText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(ConfirmDialog);
