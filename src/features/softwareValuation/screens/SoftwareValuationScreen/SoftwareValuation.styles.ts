import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  wrapperTextField: {
    "& .MuiInputBase-root": {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.text.primary,
      fontSize: "16px",
    },
  },
  addRowLine: {
    width: "100%",
    // height: "2px",
    backgroundColor: "#ccc",
    padding: 0,
    borderBottom: "3px solid transparent",
    borderTop: "3px solid transparent",
    transition: "all 200ms",
    position: "relative",
    cursor: "pointer",
  },
  addIcon: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  cellAction: {
    // width: 150,
    // maxWidth: 150,
    // minWidth: 150,
  },
  lastCell: {
    width: "calc(100% - 60px)",
  },
}));
