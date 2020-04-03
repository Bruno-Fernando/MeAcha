import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: 240
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    textDecoration: "none",
    color: "#ffff"
  }
}));
