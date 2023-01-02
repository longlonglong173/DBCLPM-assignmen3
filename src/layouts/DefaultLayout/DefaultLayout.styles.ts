import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    paddingTop: theme.spacing(8),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    position: "relative",
    zIndex: 1,
    background: theme.palette.background.secondary,
  },
  container: {
    flex: "1 1 0%",
  },
}));
