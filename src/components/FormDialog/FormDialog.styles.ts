import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  dialogEdit: {
    "& .MuiDialog-paperWidthMd": {
      maxWidth: 800,
      width: "100%",
    },
  },
  dialogAction: {
    padding: theme.spacing(2),
  },
}));
